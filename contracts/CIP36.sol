// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

library ExtraMath {
    function toUInt128(uint256 _a) internal pure returns (uint128) {
        require(_a < 2**128 - 1, "uin128 overflow");
        return uint128(_a);
    }
}

contract CIP36 is Ownable, ERC20Burnable {
    using SafeMath for *;
    using ExtraMath for *;

    struct Member {
        uint128 creditBalance;
        uint128 creditLimit;
    }

    mapping(address => Member) private _members;

    event CreditLimitUpdate(address member, uint256 limit);

    constructor() ERC20("rUSD", "rUSD") {}

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    function creditBalanceOf(address _member) public view returns (uint256) {
        return _members[_member].creditBalance;
    }

    function creditLimitOf(address _member) public view returns (uint256) {
        return _members[_member].creditLimit;
    }

    function creditLimitLeftOf(address _member) public view returns (uint256) {
        Member memory _localMember = _members[_member];
        if (_localMember.creditBalance >= _localMember.creditLimit) {
            return 0;
        }
        return _localMember.creditLimit.sub(_localMember.creditBalance);
    }

    function setCreditLimit(address _member, uint256 _limit) external onlyOwner() {
        _members[_member].creditLimit = _limit.toUInt128();
        emit CreditLimitUpdate(_member, _limit);
    }

    function _transfer(
        address _from,
        address _to,
        uint256 _amount
    ) internal override {
        _beforeTransfer(_from, _amount);
        super._transfer(_from, _to, _amount);
        _afterTransfer(_to, _amount);
    }

    function _beforeTransfer(address _from, uint256 _amount) private {
        uint256 _balanceFrom = balanceOf(_from);
        if (_balanceFrom >= _amount) {
            return;
        }

        Member memory _memberFrom = _members[_from];
        uint256 _missingBalance = _amount.sub(_balanceFrom);
        uint256 _creditLeft = _memberFrom.creditLimit.sub(_memberFrom.creditBalance, "Insufficient credit");
        require(_creditLeft >= _missingBalance, "Insufficient credit");
        _members[_from].creditBalance = _memberFrom.creditBalance.add(_missingBalance).toUInt128();
        _mint(_from, _missingBalance);
    }

    function _afterTransfer(address _to, uint256 _amount) private {
        Member memory _memberTo = _members[_to];
        uint256 _repay = Math.min(_memberTo.creditBalance, _amount);
        if (_repay == 0) {
            return;
        }
        _members[_to].creditBalance = _memberTo.creditBalance.sub(_repay).toUInt128();
        _burn(_to, _repay);
    }
}
