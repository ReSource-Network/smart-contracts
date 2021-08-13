/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MuStaker, MuStakerInterface } from "../MuStaker";

const _abi = [
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
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    inputs: [],
    name: "approveMutuality",
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
    name: "balances",
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
        name: "mutualityAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
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
        name: "stakeHolder",
        type: "address",
      },
    ],
    name: "isAproved",
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
    name: "mutualityToken",
    outputs: [
      {
        internalType: "contract MutualityToken",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "stake",
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
  "0x608060405234801561001057600080fd5b50610ebb806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b14610135578063a273e2f814610153578063a694fc3a14610171578063c4d66de81461018d578063f2fde38b146101a95761009e565b80631ebb5388146100a357806322f3e2d4146100d357806327e235e3146100f1578063715018a614610121578063837fd6711461012b575b600080fd5b6100bd60048036038101906100b891906109bf565b6101c5565b6040516100ca9190610b7d565b60405180910390f35b6100db61021b565b6040516100e89190610b7d565b60405180910390f35b61010b600480360381019061010691906109bf565b61022e565b6040516101189190610c33565b60405180910390f35b610129610246565b005b610133610383565b005b61013d6104ad565b60405161014a9190610b02565b60405180910390f35b61015b6104d7565b6040516101689190610b98565b60405180910390f35b61018b60048036038101906101869190610a11565b6104fd565b005b6101a760048036038101906101a291906109bf565b610696565b005b6101c360048036038101906101be91906109bf565b6107cc565b005b6000606760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b606860009054906101000a900460ff1681565b60666020528060005260406000206000915090505481565b61024e610978565b73ffffffffffffffffffffffffffffffffffffffff1661026c6104ad565b73ffffffffffffffffffffffffffffffffffffffff16146102c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b990610c13565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401610400929190610b54565b602060405180830381600087803b15801561041a57600080fd5b505af115801561042e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045291906109e8565b506001606760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b33606760008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661058a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058190610bd3565b60405180910390fd5b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016105e993929190610b1d565b602060405180830381600087803b15801561060357600080fd5b505af1158015610617573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063b91906109e8565b5081606660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461068b9190610c5f565b925050819055505050565b600060019054906101000a900460ff16806106bc575060008054906101000a900460ff16155b6106fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f290610bf3565b60405180910390fd5b60008060019054906101000a900460ff16159050801561074b576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b81606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001606860006101000a81548160ff02191690831515021790555080156107c85760008060016101000a81548160ff0219169083151502179055505b5050565b6107d4610978565b73ffffffffffffffffffffffffffffffffffffffff166107f26104ad565b73ffffffffffffffffffffffffffffffffffffffff1614610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083f90610c13565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af90610bb3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b60008135905061098f81610e40565b92915050565b6000815190506109a481610e57565b92915050565b6000813590506109b981610e6e565b92915050565b6000602082840312156109d157600080fd5b60006109df84828501610980565b91505092915050565b6000602082840312156109fa57600080fd5b6000610a0884828501610995565b91505092915050565b600060208284031215610a2357600080fd5b6000610a31848285016109aa565b91505092915050565b610a4381610cb5565b82525050565b610a5281610cc7565b82525050565b610a6181610cfd565b82525050565b6000610a74602683610c4e565b9150610a7f82610d50565b604082019050919050565b6000610a97601183610c4e565b9150610aa282610d9f565b602082019050919050565b6000610aba602e83610c4e565b9150610ac582610dc8565b604082019050919050565b6000610add602083610c4e565b9150610ae882610e17565b602082019050919050565b610afc81610cf3565b82525050565b6000602082019050610b176000830184610a3a565b92915050565b6000606082019050610b326000830186610a3a565b610b3f6020830185610a3a565b610b4c6040830184610af3565b949350505050565b6000604082019050610b696000830185610a3a565b610b766020830184610af3565b9392505050565b6000602082019050610b926000830184610a49565b92915050565b6000602082019050610bad6000830184610a58565b92915050565b60006020820190508181036000830152610bcc81610a67565b9050919050565b60006020820190508181036000830152610bec81610a8a565b9050919050565b60006020820190508181036000830152610c0c81610aad565b9050919050565b60006020820190508181036000830152610c2c81610ad0565b9050919050565b6000602082019050610c486000830184610af3565b92915050565b600082825260208201905092915050565b6000610c6a82610cf3565b9150610c7583610cf3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610caa57610ca9610d21565b5b828201905092915050565b6000610cc082610cd3565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610d0882610d0f565b9050919050565b6000610d1a82610cd3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4e6f742061207374616b65686f6c646572000000000000000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610e4981610cb5565b8114610e5457600080fd5b50565b610e6081610cc7565b8114610e6b57600080fd5b50565b610e7781610cf3565b8114610e8257600080fd5b5056fea26469706673582212207bf4e0f4eaeb02b387580d6caf52531ca59d9de48d516f26718d55356d982dd564736f6c63430008020033";

export class MuStaker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MuStaker> {
    return super.deploy(overrides || {}) as Promise<MuStaker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MuStaker {
    return super.attach(address) as MuStaker;
  }
  connect(signer: Signer): MuStaker__factory {
    return super.connect(signer) as MuStaker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MuStakerInterface {
    return new utils.Interface(_abi) as MuStakerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MuStaker {
    return new Contract(address, _abi, signerOrProvider) as MuStaker;
  }
}