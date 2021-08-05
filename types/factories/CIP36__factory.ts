/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CIP36, CIP36Interface } from "../CIP36";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "CreditLimitUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitLeftOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "setCreditLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002e1438038062002e1483398181016040528101906200003791906200024f565b818160006200004b6200012560201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508160049080519060200190620001019291906200012d565b5080600590805190602001906200011a9291906200012d565b505050505062000432565b600033905090565b8280546200013b9062000357565b90600052602060002090601f0160209004810192826200015f5760008555620001ab565b82601f106200017a57805160ff1916838001178555620001ab565b82800160010185558215620001ab579182015b82811115620001aa5782518255916020019190600101906200018d565b5b509050620001ba9190620001be565b5090565b5b80821115620001d9576000816000905550600101620001bf565b5090565b6000620001f4620001ee84620002eb565b620002c2565b9050828152602081018484840111156200020d57600080fd5b6200021a84828562000321565b509392505050565b600082601f8301126200023457600080fd5b815162000246848260208601620001dd565b91505092915050565b600080604083850312156200026357600080fd5b600083015167ffffffffffffffff8111156200027e57600080fd5b6200028c8582860162000222565b925050602083015167ffffffffffffffff811115620002aa57600080fd5b620002b88582860162000222565b9150509250929050565b6000620002ce620002e1565b9050620002dc82826200038d565b919050565b6000604051905090565b600067ffffffffffffffff821115620003095762000308620003f2565b5b620003148262000421565b9050602081019050919050565b60005b838110156200034157808201518184015260208101905062000324565b8381111562000351576000848401525b50505050565b600060028204905060018216806200037057607f821691505b60208210811415620003875762000386620003c3565b5b50919050565b620003988262000421565b810181811067ffffffffffffffff82111715620003ba57620003b9620003f2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6129d280620004426000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad57806395d89b411161007157806395d89b4114610357578063a457c2d714610375578063a9059cbb146103a5578063dd62ed3e146103d5578063f2fde38b146104055761012c565b806370a08231146102b3578063715018a6146102e357806379cc6790146102ed5780638da5cb5b146103095780639469ea39146103275761012c565b806332a92229116100f457806332a92229146101eb578063395093511461021b57806342966c681461024b57806349d5034d146102675780634a9a75aa146102835761012c565b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017f57806323b872dd1461019d578063313ce567146101cd575b600080fd5b610139610421565b604051610146919061215e565b60405180910390f35b61016960048036038101906101649190611e18565b6104b3565b6040516101769190612143565b60405180910390f35b6101876104d1565b6040516101949190612360565b60405180910390f35b6101b760048036038101906101b29190611dc9565b6104db565b6040516101c49190612143565b60405180910390f35b6101d56105dc565b6040516101e2919061237b565b60405180910390f35b61020560048036038101906102009190611d64565b6105e5565b6040516102129190612360565b60405180910390f35b61023560048036038101906102309190611e18565b61065f565b6040516102429190612143565b60405180910390f35b61026560048036038101906102609190611e54565b61070b565b005b610281600480360381019061027c9190611e18565b61071f565b005b61029d60048036038101906102989190611d64565b610859565b6040516102aa9190612360565b60405180910390f35b6102cd60048036038101906102c89190611d64565b6108d3565b6040516102da9190612360565b60405180910390f35b6102eb61091c565b005b61030760048036038101906103029190611e18565b610a56565b005b610311610ada565b60405161031e91906120ff565b60405180910390f35b610341600480360381019061033c9190611d64565b610b03565b60405161034e9190612360565b60405180910390f35b61035f610c6b565b60405161036c919061215e565b60405180910390f35b61038f600480360381019061038a9190611e18565b610cfd565b60405161039c9190612143565b60405180910390f35b6103bf60048036038101906103ba9190611e18565b610df1565b6040516103cc9190612143565b60405180910390f35b6103ef60048036038101906103ea9190611d8d565b610e0f565b6040516103fc9190612360565b60405180910390f35b61041f600480360381019061041a9190611d64565b610e96565b005b606060048054610430906124c4565b80601f016020809104026020016040519081016040528092919081815260200182805461045c906124c4565b80156104a95780601f1061047e576101008083540402835291602001916104a9565b820191906000526020600020905b81548152906001019060200180831161048c57829003601f168201915b5050505050905090565b60006104c76104c061103f565b8484611047565b6001905092915050565b6000600354905090565b60006104e8848484611212565b6000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061053361103f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156105b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105aa90612260565b60405180910390fd5b6105d0856105bf61103f565b85846105cb9190612408565b611047565b60019150509392505050565b60006006905090565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169050919050565b600061070161066c61103f565b84846002600061067a61103f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106fc91906123b2565b611047565b6001905092915050565b61071c61071661103f565b82611236565b50565b61072761103f565b73ffffffffffffffffffffffffffffffffffffffff16610745610ada565b73ffffffffffffffffffffffffffffffffffffffff161461079b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079290612280565b60405180910390fd5b6107a48161140c565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055507fe136e6d0a27c5f8661a7aed0168b607aa2edeb7d0e0a588be613ae5b5ad2db2c828260405161084d92919061211a565b60405180910390a15050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff169050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61092461103f565b73ffffffffffffffffffffffffffffffffffffffff16610942610ada565b73ffffffffffffffffffffffffffffffffffffffff1614610998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098f90612280565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000610a6983610a6461103f565b610e0f565b905081811015610aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa5906122a0565b60405180910390fd5b610acb83610aba61103f565b8484610ac69190612408565b611047565b610ad58383611236565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681525050905080602001516fffffffffffffffffffffffffffffffff1681600001516fffffffffffffffffffffffffffffffff1610610c23576000915050610c66565b610c6281600001516fffffffffffffffffffffffffffffffff1682602001516fffffffffffffffffffffffffffffffff1661146890919063ffffffff16565b9150505b919050565b606060058054610c7a906124c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca6906124c4565b8015610cf35780601f10610cc857610100808354040283529160200191610cf3565b820191906000526020600020905b815481529060010190602001808311610cd657829003601f168201915b5050505050905090565b60008060026000610d0c61103f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610dc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc090612320565b60405180910390fd5b610de6610dd461103f565b858584610de19190612408565b611047565b600191505092915050565b6000610e05610dfe61103f565b8484611212565b6001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610e9e61103f565b73ffffffffffffffffffffffffffffffffffffffff16610ebc610ada565b73ffffffffffffffffffffffffffffffffffffffff1614610f12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0990612280565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f79906121c0565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ae90612300565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111e906121e0565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516112059190612360565b60405180910390a3505050565b61121c838261147e565b61122783838361170a565b611231828261198c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129d906122c0565b60405180910390fd5b6112b282600083611b5c565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611339576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611330906121a0565b60405180910390fd5b81816113459190612408565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816003600082825461139a9190612408565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113ff9190612360565b60405180910390a3505050565b60006fffffffffffffffffffffffffffffffff8210611460576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145790612240565b60405180910390fd5b819050919050565b600081836114769190612408565b905092915050565b6000611489836108d3565b90508181106114985750611706565b6000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815250509050600061158f838561146890919063ffffffff16565b9050600061160983600001516fffffffffffffffffffffffffffffffff166040518060400160405280601381526020017f496e73756666696369656e74206372656469740000000000000000000000000081525085602001516fffffffffffffffffffffffffffffffff16611b619092919063ffffffff16565b90508181101561164e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164590612220565b60405180910390fd5b61167f61167a8385600001516fffffffffffffffffffffffffffffffff16611bb690919063ffffffff16565b61140c565b600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055506117018683611bcc565b505050505b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561177a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611771906122e0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e190612180565b60405180910390fd5b6117f5838383611b5c565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561187c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161187390612200565b60405180910390fd5b81816118889190612408565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461191a91906123b2565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161197e9190612360565b60405180910390a350505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020016000820160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152505090506000611a9082600001516fffffffffffffffffffffffffffffffff1684611d21565b90506000811415611aa2575050611b58565b611ad3611ace8284600001516fffffffffffffffffffffffffffffffff1661146890919063ffffffff16565b61140c565b600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550611b558482611236565b50505b5050565b505050565b6000838311158290611ba9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba0919061215e565b60405180910390fd5b5082840390509392505050565b60008183611bc491906123b2565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c3390612340565b60405180910390fd5b611c4860008383611b5c565b8060036000828254611c5a91906123b2565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611cb091906123b2565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611d159190612360565b60405180910390a35050565b6000818310611d305781611d32565b825b905092915050565b600081359050611d498161296e565b92915050565b600081359050611d5e81612985565b92915050565b600060208284031215611d7657600080fd5b6000611d8484828501611d3a565b91505092915050565b60008060408385031215611da057600080fd5b6000611dae85828601611d3a565b9250506020611dbf85828601611d3a565b9150509250929050565b600080600060608486031215611dde57600080fd5b6000611dec86828701611d3a565b9350506020611dfd86828701611d3a565b9250506040611e0e86828701611d4f565b9150509250925092565b60008060408385031215611e2b57600080fd5b6000611e3985828601611d3a565b9250506020611e4a85828601611d4f565b9150509250929050565b600060208284031215611e6657600080fd5b6000611e7484828501611d4f565b91505092915050565b611e868161243c565b82525050565b611e958161244e565b82525050565b6000611ea682612396565b611eb081856123a1565b9350611ec0818560208601612491565b611ec981612554565b840191505092915050565b6000611ee16023836123a1565b9150611eec82612565565b604082019050919050565b6000611f046022836123a1565b9150611f0f826125b4565b604082019050919050565b6000611f276026836123a1565b9150611f3282612603565b604082019050919050565b6000611f4a6022836123a1565b9150611f5582612652565b604082019050919050565b6000611f6d6026836123a1565b9150611f78826126a1565b604082019050919050565b6000611f906013836123a1565b9150611f9b826126f0565b602082019050919050565b6000611fb3600f836123a1565b9150611fbe82612719565b602082019050919050565b6000611fd66028836123a1565b9150611fe182612742565b604082019050919050565b6000611ff96020836123a1565b915061200482612791565b602082019050919050565b600061201c6024836123a1565b9150612027826127ba565b604082019050919050565b600061203f6021836123a1565b915061204a82612809565b604082019050919050565b60006120626025836123a1565b915061206d82612858565b604082019050919050565b60006120856024836123a1565b9150612090826128a7565b604082019050919050565b60006120a86025836123a1565b91506120b3826128f6565b604082019050919050565b60006120cb601f836123a1565b91506120d682612945565b602082019050919050565b6120ea8161247a565b82525050565b6120f981612484565b82525050565b60006020820190506121146000830184611e7d565b92915050565b600060408201905061212f6000830185611e7d565b61213c60208301846120e1565b9392505050565b60006020820190506121586000830184611e8c565b92915050565b600060208201905081810360008301526121788184611e9b565b905092915050565b6000602082019050818103600083015261219981611ed4565b9050919050565b600060208201905081810360008301526121b981611ef7565b9050919050565b600060208201905081810360008301526121d981611f1a565b9050919050565b600060208201905081810360008301526121f981611f3d565b9050919050565b6000602082019050818103600083015261221981611f60565b9050919050565b6000602082019050818103600083015261223981611f83565b9050919050565b6000602082019050818103600083015261225981611fa6565b9050919050565b6000602082019050818103600083015261227981611fc9565b9050919050565b6000602082019050818103600083015261229981611fec565b9050919050565b600060208201905081810360008301526122b98161200f565b9050919050565b600060208201905081810360008301526122d981612032565b9050919050565b600060208201905081810360008301526122f981612055565b9050919050565b6000602082019050818103600083015261231981612078565b9050919050565b600060208201905081810360008301526123398161209b565b9050919050565b60006020820190508181036000830152612359816120be565b9050919050565b600060208201905061237560008301846120e1565b92915050565b600060208201905061239060008301846120f0565b92915050565b600081519050919050565b600082825260208201905092915050565b60006123bd8261247a565b91506123c88361247a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156123fd576123fc6124f6565b5b828201905092915050565b60006124138261247a565b915061241e8361247a565b925082821015612431576124306124f6565b5b828203905092915050565b60006124478261245a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156124af578082015181840152602081019050612494565b838111156124be576000848401525b50505050565b600060028204905060018216806124dc57607f821691505b602082108114156124f0576124ef612525565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e73756666696369656e742063726564697400000000000000000000000000600082015250565b7f75696e313238206f766572666c6f770000000000000000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6129778161243c565b811461298257600080fd5b50565b61298e8161247a565b811461299957600080fd5b5056fea264697066735822122033238ba7e9e5007d233be70276725d5127e5316ce9fccba5f70d3e24ed2e632864736f6c63430008020033";

export class CIP36__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CIP36> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<CIP36>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): CIP36 {
    return super.attach(address) as CIP36;
  }
  connect(signer: Signer): CIP36__factory {
    return super.connect(signer) as CIP36__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CIP36Interface {
    return new utils.Interface(_abi) as CIP36Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CIP36 {
    return new Contract(address, _abi, signerOrProvider) as CIP36;
  }
}
