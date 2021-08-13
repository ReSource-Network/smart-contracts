// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/// @title NetworkRegistry - Allows Network Members to be added and removed by Network Operators.
/// @author Bridger Zoske - <bridger@resourcenetwork.co>
contract NetworkRegistry is OwnableUpgradeable {
    /*
     *  Events
     */
    event MemberAddition(address indexed member);
    event MemberRemoval(address indexed member);
    event OperatorAddition(address indexed operator);
    event OperatorRemoval(address indexed operator);

    /*
     *  Storage
     */
    mapping(address => bool) public isMember;
    mapping(address => bool) public isOperator;
    address[] public operators;
    address[] public members;

    bool public free;

    /*
     *  Modifiers
     */
    modifier onlyOperator(address operator) {
        require(isOperator[operator], "address is not operator");
        _;
    }

    modifier memberDoesNotExist(address member) {
        require(!isMember[member], "member already exists");
        _;
    }

    modifier memberExists(address member) {
        require(isMember[member], "member does not exist");
        _;
    }

    modifier operatorDoesNotExist(address operator) {
        require(!isOperator[operator], "operator already exists");
        _;
    }

    modifier operatorExists(address operator) {
        require(isOperator[operator], "operator does not exist");
        _;
    }

    modifier notNull(address _address) {
        require(_address != address(0), "invalid operator address");
        _;
    }

    /*
     * Public functions
     */
    /// @dev Contract initialzer sets initial members and initial operators.
    /// @param _members List of initial members.
    /// @param _operators List of initial operators.
    function initialize(address[] memory _members, address[] memory _operators) public virtual initializer {
        __Ownable_init();
        for (uint256 i = 0; i < _members.length; i++) {
            require(!isMember[_members[i]] && _members[i] != address(0));
            isMember[_members[i]] = true;
        }
        for (uint256 j = 0; j < _operators.length; j++) {
            require(!isOperator[_operators[j]] && _operators[j] != address(0));
            isOperator[_operators[j]] = true;
        }
        members = _members;
        operators = _operators;
        operators.push(owner());
        isOperator[owner()] = true;
    }

    /// @dev Allows to add a new member. Transaction has to be sent by an operator wallet.
    /// @param member Address of new member.
    function addMember(address member) public onlyOperator(msg.sender) memberDoesNotExist(member) notNull(member) {
        isMember[member] = true;
        members.push(member);
        emit MemberAddition(member);
    }

    /// @dev Allows to remove a member. Transaction has to be sent by operator.
    /// @param member Address of member.
    function removeMember(address member) public onlyOperator(msg.sender) memberExists(member) {
        isMember[member] = false;
        for (uint256 i = 0; i < members.length - 1; i++)
            if (members[i] == member) {
                members[i] = members[members.length - 1];
                break;
            }
        members.pop();
        emit MemberRemoval(member);
    }

    /// @dev Allows to add a new operator. Transaction has to be sent by an operator wallet.
    /// @param operator Address of new operator.
    function addOperator(address operator)
        public
        onlyOperator(msg.sender)
        operatorDoesNotExist(operator)
        notNull(operator)
    {
        isOperator[operator] = true;
        operators.push(operator);
        emit OperatorAddition(operator);
    }

    /// @dev Allows to remove a operator. Transaction has to be sent by operator.
    /// @param operator Address of operator.
    function removeOperator(address operator) public onlyOperator(msg.sender) operatorExists(operator) {
        require(operator != owner(), "can't remove owner operator");
        isOperator[operator] = false;
        for (uint256 i = 0; i < operators.length - 1; i++)
            if (operators[i] == operator) {
                operators[i] = operators[operators.length - 1];
                break;
            }
        operators.pop();
        emit OperatorRemoval(operator);
    }

    /*
     * Web3 call functions
     */
    /// @dev Returns list of members.
    /// @return List of member addresses.
    function getMembers() public view returns (address[] memory) {
        return members;
    }

    /// @dev Returns list of operators.
    /// @return List of operator addresses.
    function getOperators() public view returns (address[] memory) {
        return operators;
    }
}
