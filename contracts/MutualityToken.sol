// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MutualityToken is Initializable, ERC20Upgradeable {
    function initialize(uint256 initialSupply) public virtual initializer {
        __ERC20_init("Mutuality", "Mu");
        _mint(msg.sender, initialSupply);
    }
}
