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
  "0x608060405234801561001057600080fd5b506127d4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639870d7fe1161008c578063ac8a584a11610066578063ac8a584a14610237578063ca6d56dc14610253578063e28d49061461026f578063f2fde38b1461029f576100ea565b80639870d7fe146101cd5780639eab5253146101e9578063a230c52414610207576100ea565b80636d70f7ae116100c85780636d70f7ae14610159578063715018a61461018957806373cf25f8146101935780638da5cb5b146101af576100ea565b80630b1ca49a146100ef57806327a099d81461010b5780635daf08ca14610129575b600080fd5b61010960048036038101906101049190611f33565b6102bb565b005b6101136106a7565b604051610120919061220d565b60405180910390f35b610143600480360381019061013e9190611fc8565b610735565b60405161015091906121f2565b60405180910390f35b610173600480360381019061016e9190611f33565b610774565b604051610180919061222f565b60405180910390f35b610191610794565b005b6101ad60048036038101906101a89190611f5c565b6108d1565b005b6101b7610e3b565b6040516101c491906121f2565b60405180910390f35b6101e760048036038101906101e29190611f33565b610e65565b005b6101f16110f5565b6040516101fe919061220d565b60405180910390f35b610221600480360381019061021c9190611f33565b611183565b60405161022e919061222f565b60405180910390f35b610251600480360381019061024c9190611f33565b6111a3565b005b61026d60048036038101906102689190611f33565b611605565b005b61028960048036038101906102849190611fc8565b611895565b60405161029691906121f2565b60405180910390f35b6102b960048036038101906102b49190611f33565b6118d4565b005b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610348576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033f9061230a565b60405180910390fd5b81606560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cc9061236a565b60405180910390fd5b6000606560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b60016068805490506104429190612425565b8110156105f1578373ffffffffffffffffffffffffffffffffffffffff166068828154811061049a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156105de57606860016068805490506104f59190612425565b8154811061052c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660688281548110610591577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506105f1565b80806105e9906124d2565b915050610430565b50606880548061062a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f270bfc616dd36d5cb6b35aac93e6ef22b089c34e6f6ad6f0892797424840897b60405160405180910390a2505050565b6060606780548060200260200160405190810160405280929190818152602001828054801561072b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116106e1575b5050505050905090565b6068818154811061074557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60666020528060005260406000206000915054906101000a900460ff1681565b61079c611a80565b73ffffffffffffffffffffffffffffffffffffffff166107ba610e3b565b73ffffffffffffffffffffffffffffffffffffffff1614610810576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610807906122ea565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600060019054906101000a900460ff16806108f7575060008054906101000a900460ff16155b610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092d906122ca565b60405180910390fd5b60008060019054906101000a900460ff161590508015610986576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61098e611a88565b60005b8351811015610b5557606560008583815181106109d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610aa15750600073ffffffffffffffffffffffffffffffffffffffff16848281518110610a80577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610aaa57600080fd5b600160656000868481518110610ae9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610b4d906124d2565b915050610991565b5060005b8251811015610d1d5760666000848381518110610b9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015610c695750600073ffffffffffffffffffffffffffffffffffffffff16838281518110610c48577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b610c7257600080fd5b600160666000858481518110610cb1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080610d15906124d2565b915050610b59565b508260689080519060200190610d34929190611dcc565b508160679080519060200190610d4b929190611dcc565b506067610d56610e3b565b9080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160666000610dc4610e3b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508015610e365760008060016101000a81548160ff0219169083151502179055505b505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ef2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee99061230a565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610f80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f77906122aa565b60405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ff1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe89061226a565b60405180910390fd5b6001606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506067849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167fe96a56aa17dd8ae64ac3a51347e8e8a03d52f1cb2acdf8ed49b20d55662ebecc60405160405180910390a250505050565b6060606880548060200260200160405190810160405280929190818152602001828054801561117957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161112f575b5050505050905090565b60656020528060005260406000206000915054906101000a900460ff1681565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611230576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112279061230a565b60405180910390fd5b81606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166112bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b49061232a565b60405180910390fd5b6112c5610e3b565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132a9061234a565b60405180910390fd5b6000606660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b60016067805490506113a09190612425565b81101561154f578373ffffffffffffffffffffffffffffffffffffffff16606782815481106113f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561153c57606760016067805490506114539190612425565b8154811061148a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16606782815481106114ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061154f565b8080611547906124d2565b91505061138e565b506067805480611588577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558273ffffffffffffffffffffffffffffffffffffffff167f108286147377add4f5f7bcdd7b6104dc6bdac3443e499142a612d418aa0be15460405160405180910390a2505050565b33606660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611692576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116899061230a565b60405180910390fd5b81606560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611720576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117179061228a565b60405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611791576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117889061226a565b60405180910390fd5b6001606560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506068849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff167f72114e270de66b9d2710ecf140403e5e99b1574767d6a8197bdc8d807a46e7c760405160405180910390a250505050565b606781815481106118a557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6118dc611a80565b73ffffffffffffffffffffffffffffffffffffffff166118fa610e3b565b73ffffffffffffffffffffffffffffffffffffffff1614611950576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611947906122ea565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b79061224a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600060019054906101000a900460ff1680611aae575060008054906101000a900460ff16155b611aed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae4906122ca565b60405180910390fd5b60008060019054906101000a900460ff161590508015611b3d576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b611b45611b71565b611b4d611c4a565b8015611b6e5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611b97575060008054906101000a900460ff16155b611bd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcd906122ca565b60405180910390fd5b60008060019054906101000a900460ff161590508015611c26576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015611c475760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680611c70575060008054906101000a900460ff16155b611caf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca6906122ca565b60405180910390fd5b60008060019054906101000a900460ff161590508015611cff576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000611d09611a80565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508015611dc95760008060016101000a81548160ff0219169083151502179055505b50565b828054828255906000526020600020908101928215611e45579160200282015b82811115611e445782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611dec565b5b509050611e529190611e56565b5090565b5b80821115611e6f576000816000905550600101611e57565b5090565b6000611e86611e81846123af565b61238a565b90508083825260208201905082856020860282011115611ea557600080fd5b60005b85811015611ed55781611ebb8882611edf565b845260208401935060208301925050600181019050611ea8565b5050509392505050565b600081359050611eee81612770565b92915050565b600082601f830112611f0557600080fd5b8135611f15848260208601611e73565b91505092915050565b600081359050611f2d81612787565b92915050565b600060208284031215611f4557600080fd5b6000611f5384828501611edf565b91505092915050565b60008060408385031215611f6f57600080fd5b600083013567ffffffffffffffff811115611f8957600080fd5b611f9585828601611ef4565b925050602083013567ffffffffffffffff811115611fb257600080fd5b611fbe85828601611ef4565b9150509250929050565b600060208284031215611fda57600080fd5b6000611fe884828501611f1e565b91505092915050565b6000611ffd8383612009565b60208301905092915050565b61201281612459565b82525050565b61202181612459565b82525050565b6000612032826123eb565b61203c8185612403565b9350612047836123db565b8060005b8381101561207857815161205f8882611ff1565b975061206a836123f6565b92505060018101905061204b565b5085935050505092915050565b61208e8161246b565b82525050565b60006120a1602683612414565b91506120ac8261258a565b604082019050919050565b60006120c4601883612414565b91506120cf826125d9565b602082019050919050565b60006120e7601583612414565b91506120f282612602565b602082019050919050565b600061210a601783612414565b91506121158261262b565b602082019050919050565b600061212d602e83612414565b915061213882612654565b604082019050919050565b6000612150602083612414565b915061215b826126a3565b602082019050919050565b6000612173601783612414565b915061217e826126cc565b602082019050919050565b6000612196601783612414565b91506121a1826126f5565b602082019050919050565b60006121b9601b83612414565b91506121c48261271e565b602082019050919050565b60006121dc601583612414565b91506121e782612747565b602082019050919050565b60006020820190506122076000830184612018565b92915050565b600060208201905081810360008301526122278184612027565b905092915050565b60006020820190506122446000830184612085565b92915050565b6000602082019050818103600083015261226381612094565b9050919050565b60006020820190508181036000830152612283816120b7565b9050919050565b600060208201905081810360008301526122a3816120da565b9050919050565b600060208201905081810360008301526122c3816120fd565b9050919050565b600060208201905081810360008301526122e381612120565b9050919050565b6000602082019050818103600083015261230381612143565b9050919050565b6000602082019050818103600083015261232381612166565b9050919050565b6000602082019050818103600083015261234381612189565b9050919050565b60006020820190508181036000830152612363816121ac565b9050919050565b60006020820190508181036000830152612383816121cf565b9050919050565b60006123946123a5565b90506123a082826124a1565b919050565b6000604051905090565b600067ffffffffffffffff8211156123ca576123c961254a565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061243082612497565b915061243b83612497565b92508282101561244e5761244d61251b565b5b828203905092915050565b600061246482612477565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6124aa82612579565b810181811067ffffffffffffffff821117156124c9576124c861254a565b5b80604052505050565b60006124dd82612497565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156125105761250f61251b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f696e76616c6964206f70657261746f7220616464726573730000000000000000600082015250565b7f6d656d62657220616c7265616479206578697374730000000000000000000000600082015250565b7f6f70657261746f7220616c726561647920657869737473000000000000000000600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f61646472657373206973206e6f74206f70657261746f72000000000000000000600082015250565b7f6f70657261746f7220646f6573206e6f74206578697374000000000000000000600082015250565b7f63616e27742072656d6f7665206f776e6572206f70657261746f720000000000600082015250565b7f6d656d62657220646f6573206e6f742065786973740000000000000000000000600082015250565b61277981612459565b811461278457600080fd5b50565b61279081612497565b811461279b57600080fd5b5056fea2646970667358221220744f6ed05b43951f3b07c27eaadfe6421f4a533646dde4fb54b4ef22185244a264736f6c63430008020033";

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
