/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NetworkRegistry,
  NetworkRegistryInterface,
} from "../NetworkRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "MemberAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "MemberRemoval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorRemoval",
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
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "free",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMembers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_operators",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "members",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "operators",
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
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50612810806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063ac8a584a11610066578063ac8a584a14610260578063ca6d56dc1461027c578063e28d490614610298578063f2fde38b146102c8576100f5565b80638da5cb5b146101d85780639870d7fe146101f65780639eab525314610212578063a230c52414610230576100f5565b80635daf08ca116100d35780635daf08ca146101525780636d70f7ae14610182578063715018a6146101b257806373cf25f8146101bc576100f5565b80630b1ca49a146100fa5780631370128e1461011657806327a099d814610134575b600080fd5b610114600480360381019061010f9190611f6f565b6102e4565b005b61011e6106d0565b60405161012b919061226b565b60405180910390f35b61013c6106e3565b6040516101499190612249565b60405180910390f35b61016c60048036038101906101679190612004565b610771565b604051610179919061222e565b60405180910390f35b61019c60048036038101906101979190611f6f565b6107b0565b6040516101a9919061226b565b60405180910390f35b6101ba6107d0565b005b6101d660048036038101906101d19190611f98565b61090d565b005b6101e0610e77565b6040516101ed919061222e565b60405180910390f35b610210600480360381019061020b9190611f6f565b610ea1565b005b61021a611131565b6040516102279190612249565b60405180910390f35b61024a60048036038101906102459190611f6f565b6111bf565b604051610257919061226b565b60405180910390f35b61027a60048036038101906102759190611f6f565b6111df565b005b61029660048036038101906102919190611f6f565b611641565b005b6102b260048036038101906102ad9190612004565b6118d1565b6040516102bf919061222e565b60405180910390f35b6102e260048036038101906102dd9190611f6f565b611910565b005b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610371576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036890612346565b60405180910390fd5b81606560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f5906123a6565b60405180910390fd5b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600160688054905061046b9190612461565b81101561061a578373ffffffffffffffffffffffffffffffffffffffff16606882815481106104c3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610607576068600160688054905061051e9190612461565b81548110610555577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16606882815481106105ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061061a565b80806106129061250e565b915050610459565b506068805480610653577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f270bfc616dd36d5cb6b35aac93e6ef22b089c34e6f6ad6f0892797424840897b60405160405180910390a2505050565b606960009054906101000a900460ff1681565b6060606780548060200260200160405190810160405280929190818152602001828054801561076757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161071d575b5050505050905090565b6068818154811061078157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60666020528060005260406000206000915054906101000a900460ff1681565b6107d8611abc565b73ffffffffffffffffffffffffffffffffffffffff166107f6610e77565b73ffffffffffffffffffffffffffffffffffffffff161461084c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084390612326565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600060019054906101000a900460ff1680610933575060008054906101000a900460ff16155b610972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096990612306565b60405180910390fd5b60008060019054906101000a900460ff1615905080156109c2576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6109ca611ac4565b60005b8351811015610b915760656000858381518110610a13577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610add5750600073ffffffffffffffffffffffffffffffffffffffff16848281518110610abc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610ae657600080fd5b600160656000868481518110610b25577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610b899061250e565b9150506109cd565b5060005b8251811015610d595760666000848381518110610bdb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610ca55750600073ffffffffffffffffffffffffffffffffffffffff16838281518110610c84577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610cae57600080fd5b600160666000858481518110610ced577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610d519061250e565b915050610b95565b508260689080519060200190610d70929190611e08565b508160679080519060200190610d87929190611e08565b506067610d92610e77565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160666000610e00610e77565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508015610e725760008060016101000a81548160ff0219169083151502179055505b505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2590612346565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610fbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb3906122e6565b60405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561102d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611024906122a6565b60405180910390fd5b6001606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506067849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167fe96a56aa17dd8ae64ac3a51347e8e8a03d52f1cb2acdf8ed49b20d55662ebecc60405160405180910390a250505050565b606060688054806020026020016040519081016040528092919081815260200182805480156111b557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161116b575b5050505050905090565b60656020528060005260406000206000915054906101000a900460ff1681565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661126c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126390612346565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166112f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f090612366565b60405180910390fd5b611301610e77565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561136f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136690612386565b60405180910390fd5b6000606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b60016067805490506113dc9190612461565b81101561158b578373ffffffffffffffffffffffffffffffffffffffff1660678281548110611434577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611578576067600160678054905061148f9190612461565b815481106114c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166067828154811061152b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061158b565b80806115839061250e565b9150506113ca565b5060678054806115c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f108286147377add4f5f7bcdd7b6104dc6bdac3443e499142a612d418aa0be15460405160405180910390a2505050565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166116ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c590612346565b60405180910390fd5b81606560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561175c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611753906122c6565b60405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156117cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c4906122a6565b60405180910390fd5b6001606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506068849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167f72114e270de66b9d2710ecf140403e5e99b1574767d6a8197bdc8d807a46e7c760405160405180910390a250505050565b606781815481106118e157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611918611abc565b73ffffffffffffffffffffffffffffffffffffffff16611936610e77565b73ffffffffffffffffffffffffffffffffffffffff161461198c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198390612326565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119f390612286565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600060019054906101000a900460ff1680611aea575060008054906101000a900460ff16155b611b29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2090612306565b60405180910390fd5b60008060019054906101000a900460ff161590508015611b79576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611b81611bad565b611b89611c86565b8015611baa5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611bd3575060008054906101000a900460ff16155b611c12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c0990612306565b60405180910390fd5b60008060019054906101000a900460ff161590508015611c62576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015611c835760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611cac575060008054906101000a900460ff16155b611ceb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce290612306565b60405180910390fd5b60008060019054906101000a900460ff161590508015611d3b576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000611d45611abc565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508015611e055760008060016101000a81548160ff0219169083151502179055505b50565b828054828255906000526020600020908101928215611e81579160200282015b82811115611e805782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611e28565b5b509050611e8e9190611e92565b5090565b5b80821115611eab576000816000905550600101611e93565b5090565b6000611ec2611ebd846123eb565b6123c6565b90508083825260208201905082856020860282011115611ee157600080fd5b60005b85811015611f115781611ef78882611f1b565b845260208401935060208301925050600181019050611ee4565b5050509392505050565b600081359050611f2a816127ac565b92915050565b600082601f830112611f4157600080fd5b8135611f51848260208601611eaf565b91505092915050565b600081359050611f69816127c3565b92915050565b600060208284031215611f8157600080fd5b6000611f8f84828501611f1b565b91505092915050565b60008060408385031215611fab57600080fd5b600083013567ffffffffffffffff811115611fc557600080fd5b611fd185828601611f30565b925050602083013567ffffffffffffffff811115611fee57600080fd5b611ffa85828601611f30565b9150509250929050565b60006020828403121561201657600080fd5b600061202484828501611f5a565b91505092915050565b60006120398383612045565b60208301905092915050565b61204e81612495565b82525050565b61205d81612495565b82525050565b600061206e82612427565b612078818561243f565b935061208383612417565b8060005b838110156120b457815161209b888261202d565b97506120a683612432565b925050600181019050612087565b5085935050505092915050565b6120ca816124a7565b82525050565b60006120dd602683612450565b91506120e8826125c6565b604082019050919050565b6000612100601883612450565b915061210b82612615565b602082019050919050565b6000612123601583612450565b915061212e8261263e565b602082019050919050565b6000612146601783612450565b915061215182612667565b602082019050919050565b6000612169602e83612450565b915061217482612690565b604082019050919050565b600061218c602083612450565b9150612197826126df565b602082019050919050565b60006121af601783612450565b91506121ba82612708565b602082019050919050565b60006121d2601783612450565b91506121dd82612731565b602082019050919050565b60006121f5601b83612450565b91506122008261275a565b602082019050919050565b6000612218601583612450565b915061222382612783565b602082019050919050565b60006020820190506122436000830184612054565b92915050565b600060208201905081810360008301526122638184612063565b905092915050565b600060208201905061228060008301846120c1565b92915050565b6000602082019050818103600083015261229f816120d0565b9050919050565b600060208201905081810360008301526122bf816120f3565b9050919050565b600060208201905081810360008301526122df81612116565b9050919050565b600060208201905081810360008301526122ff81612139565b9050919050565b6000602082019050818103600083015261231f8161215c565b9050919050565b6000602082019050818103600083015261233f8161217f565b9050919050565b6000602082019050818103600083015261235f816121a2565b9050919050565b6000602082019050818103600083015261237f816121c5565b9050919050565b6000602082019050818103600083015261239f816121e8565b9050919050565b600060208201905081810360008301526123bf8161220b565b9050919050565b60006123d06123e1565b90506123dc82826124dd565b919050565b6000604051905090565b600067ffffffffffffffff82111561240657612405612586565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061246c826124d3565b9150612477836124d3565b92508282101561248a57612489612557565b5b828203905092915050565b60006124a0826124b3565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6124e6826125b5565b810181811067ffffffffffffffff8211171561250557612504612586565b5b80604052505050565b6000612519826124d3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561254c5761254b612557565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f696e76616c6964206f70657261746f7220616464726573730000000000000000600082015250565b7f6d656d62657220616c7265616479206578697374730000000000000000000000600082015250565b7f6f70657261746f7220616c726561647920657869737473000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f61646472657373206973206e6f74206f70657261746f72000000000000000000600082015250565b7f6f70657261746f7220646f6573206e6f74206578697374000000000000000000600082015250565b7f63616e27742072656d6f7665206f776e6572206f70657261746f720000000000600082015250565b7f6d656d62657220646f6573206e6f742065786973740000000000000000000000600082015250565b6127b581612495565b81146127c057600080fd5b50565b6127cc816124d3565b81146127d757600080fd5b5056fea2646970667358221220b19639f31d2b675d726195ee58050b7d7fba813123655af6ceeb1aa3d0c082eb64736f6c63430008020033";

export class NetworkRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NetworkRegistry> {
    return super.deploy(overrides || {}) as Promise<NetworkRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NetworkRegistry {
    return super.attach(address) as NetworkRegistry;
  }
  connect(signer: Signer): NetworkRegistry__factory {
    return super.connect(signer) as NetworkRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NetworkRegistryInterface {
    return new utils.Interface(_abi) as NetworkRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NetworkRegistry {
    return new Contract(address, _abi, signerOrProvider) as NetworkRegistry;
  }
}
