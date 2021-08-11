pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "../CIP36/CIP36.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract UnderwriteManager is OwnableUpgradeable {
    using SafeMath for *;

    /*
     *  Constants
     */

    /*
     *  Storage
     */
    IERC20 public collateralToken;
    CIP36 public networkToken;

    mapping(address => uint256) public rewards;
    mapping(address => mapping(address => uint256)) public underwriterCollateral;
    mapping(address => address) public underwritees;
    bool public isActive;

    /*
     *  Events
     */
    event Underwrite(address underwriter, uint256 amount);
    event Withdrawl(address underwriter, uint256 amount);
    event RewardUpdated(address underwriter, uint256 amount);
    event RewardClaimed(address underwriter, uint256 amount);

    function initialize(address _collateralTokenAddress, address _networkTokenAddress) public virtual initializer {
        collateralToken = IERC20(_collateralTokenAddress);
        networkToken = CIP36(_networkTokenAddress);
        isActive = true;
    }

    /*
     *  Modifiers
     */
    modifier onlyNetwork(address networkAddress) {
        require(address(networkToken) == networkAddress, "Only the network can perform this operation");
        _;
    }

    modifier notNull(address _address) {
        require(_address != address(0), "invalid operator address");
        _;
    }

    /*
     * Public functions
     */
    function underwrite(uint256 amount, address underwritee) public {
        collateralToken.transferFrom(msg.sender, address(this), amount);
        // TODO: amount validation
        underwriterCollateral[msg.sender][underwritee] = amount;
        underwritees[underwritee] = msg.sender;
    }

    function withdraw(uint256 amount, address underwritee) public {
        uint256 collateral = underwriterCollateral[msg.sender][underwritee];
        // TODO: check underwritee balance
        require(amount <= collateral, "invalid withdraw amount");
        uint256 total = amount + rewards[msg.sender];
        collateralToken.transfer(msg.sender, total);
        emit Withdrawl(msg.sender, amount);
    }

    function updateReward(address underwritee, uint256 txAmount) public onlyNetwork(msg.sender) {
        address underwriter = underwritees[underwritee];
        if (underwriter == address(0)) {
            return;
        }
        uint256 reward = calculateReward(txAmount);
        rewards[underwriter] += reward;
        emit RewardUpdated(msg.sender, reward);
    }

    function claimReward() public {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No reward to claim");
        collateralToken.transfer(msg.sender, reward);
        emit RewardClaimed(msg.sender, reward);
    }

    function toggleActive() public onlyOwner() {
        isActive = !isActive;
    }

    /*
     * Private functions
     */

    function calculateReward(uint256 txAmount) private returns (uint256) {
        return txAmount.mul(2).div(100);
    }
}
