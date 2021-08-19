pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "../CIP36/CIP36.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract UnderwriteManager is OwnableUpgradeable {
    /*
     *  Constants
     */
    uint256 public constant MU_PRICE_DENOMINATOR_USD = 5;
    uint256 public constant LEVERAGE_DENOMINATOR = 5;
    uint256 public constant MWEI = 1000000000000;
    uint256 public constant REWARD_PERCENT = 2;
    uint256 public constant CREDIT_RENEWAL = 180 days;
    uint256 public constant MINIMUM_COLLATERAL = 200 ether;

    /*
     *  Storage
     */
    IERC20 public collateralToken;
    CIP36 public networkToken;

    mapping(address => uint256) public rewards;
    mapping(address => mapping(address => CreditLine)) public creditLines;
    mapping(address => address) public underwritees;
    bool public isActive;

    struct CreditLine {
        uint256 collateral;
        uint256 issueDate;
    }

    /*
     *  Events
     */
    event Underwrite(address underwriter, CreditLine creditLine);
    event Withdrawl(address underwriter, uint256 amount);
    event RewardUpdated(address underwriter, uint256 amount);
    event RewardClaimed(address underwriter, uint256 amount);

    function initialize(
        address _collateralTokenAddress,
        address _networkTokenAddress,
        address owner
    ) external virtual initializer {
        collateralToken = IERC20(_collateralTokenAddress);
        networkToken = CIP36(_networkTokenAddress);
        isActive = true;
        __Ownable_init();
        transferOwnership(owner);
    }

    /*
     *  Modifiers
     */
    modifier notNull(address _address) {
        require(_address != address(0), "Invalid address");
        _;
    }

    modifier onlyNetwork(address _address) {
        require(_address == address(networkToken) || _address == owner(), "Invalid network address");
        _;
    }

    modifier validCreditRenewal(address underwritee) {
        address underwriter = underwritees[underwritee];
        uint256 issueDate = creditLines[underwriter][underwritee].issueDate;
        require(block.timestamp - issueDate > CREDIT_RENEWAL, "Credit limit still active");
        _;
    }

    /*
     * Public functions
     */
    function underwrite(uint256 collateralAmount, address underwritee) external {
        require(
            underwritees[underwritee] == address(0) || underwritees[underwritee] == address(msg.sender),
            "Address already underwritten"
        );
        uint256 totalCollateral = creditLines[msg.sender][underwritee].collateral + collateralAmount;
        require(totalCollateral >= MINIMUM_COLLATERAL, "Insufficient collateral");
        collateralToken.transferFrom(msg.sender, address(this), collateralAmount);
        uint256 creditLimit = calculateCredit(totalCollateral);
        creditLines[msg.sender][underwritee] = CreditLine(totalCollateral, block.timestamp);
        underwritees[underwritee] = msg.sender;

        networkToken.setCreditLimit(underwritee, creditLimit);
        emit Underwrite(msg.sender, CreditLine(totalCollateral, block.timestamp));
    }

    function withdraw(uint256 amount, address underwritee) external validCreditRenewal(underwritee) {
        address underwriter;
        if (msg.sender == underwritee) {
            underwriter = underwritees[msg.sender];
        } else {
            underwriter = underwritees[underwritee];
        }
        require(underwriter != address(0), "Invalid address");
        uint256 collateral = creditLines[underwriter][underwritee].collateral;
        require(amount <= collateral, "Invalid withdraw amount");
        uint256 creditBalance = networkToken.creditBalanceOf(underwritee);
        uint256 offsetCost = creditBalance * MWEI;
        uint256 total = amount + rewards[underwriter] + offsetCost;
        collateralToken.transfer(underwriter, total);
        emit Withdrawl(underwriter, amount);
    }

    function renewCreditLine(address underwritee) external validCreditRenewal(underwritee) {
        address underwriter = underwritees[underwritee];
        uint256 issueDate = creditLines[underwriter][underwritee].issueDate;
        require(msg.sender == underwriter, "Must be underwriter to renew credit line");
        creditLines[underwriter][underwritee].issueDate = block.timestamp;
    }

    function updateReward(address underwritee, uint256 txAmount) external onlyNetwork(msg.sender) {
        address underwriter = underwritees[underwritee];
        if (underwriter == address(0)) {
            return;
        }
        tryUpdateCreditLine(underwritee, underwriter);
        uint256 reward = calculateReward(txAmount);
        rewards[underwriter] += reward;
        emit RewardUpdated(msg.sender, reward);
    }

    function claimReward() external {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No reward to claim");
        collateralToken.transfer(msg.sender, reward);
        emit RewardClaimed(msg.sender, reward);
    }

    function toggleActive() external onlyOwner() {
        isActive = !isActive;
    }

    function calculateCredit(uint256 collateralAmount) public view returns (uint256) {
        return ((collateralAmount / MWEI) * (LEVERAGE_DENOMINATOR)) / MU_PRICE_DENOMINATOR_USD;
    }

    /*
     * Private functions
     */
    function calculateReward(uint256 txAmount) private returns (uint256) {
        return (txAmount / 100) * REWARD_PERCENT * MWEI;
    }

    function tryUpdateCreditLine(address underwritee, address underwriter) private {
        if ((block.timestamp - creditLines[underwriter][underwritee].issueDate) > CREDIT_RENEWAL + 1 days) {
            creditLines[underwriter][underwritee].issueDate = block.timestamp;
        }
    }
}
