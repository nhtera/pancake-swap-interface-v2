/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface CrossFarmingSenderInterface extends utils.Interface {
  functions: {
    "BNB_CHANGE()": FunctionFragment;
    "BSC_CHAIN_ID()": FunctionFragment;
    "COMPENSATION_PRECISION()": FunctionFragment;
    "CROSS_FARMING_RECEIVER()": FunctionFragment;
    "EXCHANGE_RATE_PRECISION()": FunctionFragment;
    "MAX_COMPENSATION_RATE()": FunctionFragment;
    "MIN_COMPENSATION_RATE()": FunctionFragment;
    "Vault()": FunctionFragment;
    "claimFee(uint256)": FunctionFragment;
    "compensationRate()": FunctionFragment;
    "createProxyGasLimit()": FunctionFragment;
    "drainToken(address,uint256)": FunctionFragment;
    "estimateGaslimit(uint8,address,uint8)": FunctionFragment;
    "executeMessage(address,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
    "gaslimits(uint8,uint8)": FunctionFragment;
    "is1st(address)": FunctionFragment;
    "messageBus()": FunctionFragment;
    "nonces(address,uint256)": FunctionFragment;
    "oracle(uint8)": FunctionFragment;
    "oracleUpdateBuffer(uint8)": FunctionFragment;
    "owner()": FunctionFragment;
    "sendFarmMessage(bytes)": FunctionFragment;
    "setBnbChange(uint256)": FunctionFragment;
    "setCompensationRate(uint256)": FunctionFragment;
    "setCreateProxyGasLimit(uint256)": FunctionFragment;
    "setGaslimits(uint8,uint8,uint256)": FunctionFragment;
    "setMessageBus(address)": FunctionFragment;
    "setOracle(uint8,address)": FunctionFragment;
    "setOracleUpdateBuffer(uint8,uint256)": FunctionFragment;
    "setReceiver(address)": FunctionFragment;
    "setVault(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BNB_CHANGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BSC_CHAIN_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMPENSATION_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CROSS_FARMING_RECEIVER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXCHANGE_RATE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_COMPENSATION_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_COMPENSATION_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "compensationRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createProxyGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "drainToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateGaslimit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessage",
    values: [string, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferFallback",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferRefund",
    values: [string, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "gaslimits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "is1st", values: [string]): string;
  encodeFunctionData(
    functionFragment: "messageBus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "oracle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleUpdateBuffer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendFarmMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setBnbChange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCompensationRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreateProxyGasLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGaslimits",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMessageBus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracle",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleUpdateBuffer",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setReceiver", values: [string]): string;
  encodeFunctionData(functionFragment: "setVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "BNB_CHANGE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BSC_CHAIN_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMPENSATION_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CROSS_FARMING_RECEIVER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXCHANGE_RATE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_COMPENSATION_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_COMPENSATION_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compensationRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProxyGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "drainToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimateGaslimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransferFallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransferRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gaslimits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "is1st", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleUpdateBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendFarmMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBnbChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCompensationRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreateProxyGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGaslimits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMessageBus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOracleUpdateBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BnbChangeUpdated(uint256)": EventFragment;
    "CompensationRateUpdated(uint256)": EventFragment;
    "CreateProxyGasLimitUpdated(uint256)": EventFragment;
    "FarmingMessageReceived(address,uint64,uint64,uint8,address,uint256,uint256)": EventFragment;
    "FeeClaimed(uint256,bool)": EventFragment;
    "GasLimitUpdated(uint8,uint8,uint256)": EventFragment;
    "MessageBusUpdated(address)": EventFragment;
    "NewOracle(address)": EventFragment;
    "OracleBufferUpdated(uint8,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ReceiverUpdated(address)": EventFragment;
    "VaultUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BnbChangeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CompensationRateUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateProxyGasLimitUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FarmingMessageReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GasLimitUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageBusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOracle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleBufferUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiverUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultUpdated"): EventFragment;
}

export type BnbChangeUpdatedEvent = TypedEvent<
  [BigNumber],
  { amount: BigNumber }
>;

export type BnbChangeUpdatedEventFilter =
  TypedEventFilter<BnbChangeUpdatedEvent>;

export type CompensationRateUpdatedEvent = TypedEvent<
  [BigNumber],
  { rate: BigNumber }
>;

export type CompensationRateUpdatedEventFilter =
  TypedEventFilter<CompensationRateUpdatedEvent>;

export type CreateProxyGasLimitUpdatedEvent = TypedEvent<
  [BigNumber],
  { gaslimit: BigNumber }
>;

export type CreateProxyGasLimitUpdatedEventFilter =
  TypedEventFilter<CreateProxyGasLimitUpdatedEvent>;

export type FarmingMessageReceivedEvent = TypedEvent<
  [string, BigNumber, BigNumber, number, string, BigNumber, BigNumber],
  {
    sender: string;
    srcChainId: BigNumber;
    nonce: BigNumber;
    msgType: number;
    acount: string;
    pid: BigNumber;
    amount: BigNumber;
  }
>;

export type FarmingMessageReceivedEventFilter =
  TypedEventFilter<FarmingMessageReceivedEvent>;

export type FeeClaimedEvent = TypedEvent<
  [BigNumber, boolean],
  { amount: BigNumber; success: boolean }
>;

export type FeeClaimedEventFilter = TypedEventFilter<FeeClaimedEvent>;

export type GasLimitUpdatedEvent = TypedEvent<
  [number, number, BigNumber],
  { chain: number; msgtype: number; gaslimit: BigNumber }
>;

export type GasLimitUpdatedEventFilter = TypedEventFilter<GasLimitUpdatedEvent>;

export type MessageBusUpdatedEvent = TypedEvent<
  [string],
  { messageBus: string }
>;

export type MessageBusUpdatedEventFilter =
  TypedEventFilter<MessageBusUpdatedEvent>;

export type NewOracleEvent = TypedEvent<[string], { oracle: string }>;

export type NewOracleEventFilter = TypedEventFilter<NewOracleEvent>;

export type OracleBufferUpdatedEvent = TypedEvent<
  [number, BigNumber],
  { feed: number; oracleUpdateBuffer: BigNumber }
>;

export type OracleBufferUpdatedEventFilter =
  TypedEventFilter<OracleBufferUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type ReceiverUpdatedEvent = TypedEvent<[string], { receiver: string }>;

export type ReceiverUpdatedEventFilter = TypedEventFilter<ReceiverUpdatedEvent>;

export type VaultUpdatedEvent = TypedEvent<[string], { vault: string }>;

export type VaultUpdatedEventFilter = TypedEventFilter<VaultUpdatedEvent>;

export interface CrossFarmingSender extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossFarmingSenderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BNB_CHANGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<[BigNumber]>;

    COMPENSATION_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    EXCHANGE_RATE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_COMPENSATION_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_COMPENSATION_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    Vault(overrides?: CallOverrides): Promise<[string]>;

    claimFee(
      _gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compensationRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    createProxyGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    drainToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    estimateGaslimit(
      _chain: BigNumberish,
      _account: string,
      _msgType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { gaslimit: BigNumber }>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg3: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gaslimits(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    is1st(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    messageBus(overrides?: CallOverrides): Promise<[string]>;

    nonces(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    oracle(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    oracleUpdateBuffer(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    sendFarmMessage(
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBnbChange(
      _change: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCompensationRate(
      _rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCreateProxyGasLimit(
      _gaslimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGaslimits(
      _chain: BigNumberish,
      _type: BigNumberish,
      _gaslimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      _feed: BigNumberish,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracleUpdateBuffer(
      _feed: BigNumberish,
      _oracleUpdateBuffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BNB_CHANGE(overrides?: CallOverrides): Promise<BigNumber>;

  BSC_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

  COMPENSATION_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<string>;

  EXCHANGE_RATE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_COMPENSATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_COMPENSATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  Vault(overrides?: CallOverrides): Promise<string>;

  claimFee(
    _gas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compensationRate(overrides?: CallOverrides): Promise<BigNumber>;

  createProxyGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

  drainToken(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  estimateGaslimit(
    _chain: BigNumberish,
    _account: string,
    _msgType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  executeMessage(
    _sender: string,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    arg3: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    _sender: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransferFallback(
    _sender: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransferRefund(
    _token: string,
    _amount: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gaslimits(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  is1st(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  messageBus(overrides?: CallOverrides): Promise<string>;

  nonces(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  oracle(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  oracleUpdateBuffer(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  sendFarmMessage(
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBnbChange(
    _change: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCompensationRate(
    _rate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCreateProxyGasLimit(
    _gaslimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGaslimits(
    _chain: BigNumberish,
    _type: BigNumberish,
    _gaslimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMessageBus(
    _messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    _feed: BigNumberish,
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracleUpdateBuffer(
    _feed: BigNumberish,
    _oracleUpdateBuffer: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReceiver(
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVault(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BNB_CHANGE(overrides?: CallOverrides): Promise<BigNumber>;

    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    COMPENSATION_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<string>;

    EXCHANGE_RATE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_COMPENSATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_COMPENSATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    Vault(overrides?: CallOverrides): Promise<string>;

    claimFee(_gas: BigNumberish, overrides?: CallOverrides): Promise<void>;

    compensationRate(overrides?: CallOverrides): Promise<BigNumber>;

    createProxyGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    drainToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    estimateGaslimit(
      _chain: BigNumberish,
      _account: string,
      _msgType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg3: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    gaslimits(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    is1st(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    messageBus(overrides?: CallOverrides): Promise<string>;

    nonces(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    oracleUpdateBuffer(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    sendFarmMessage(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setBnbChange(
      _change: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCompensationRate(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCreateProxyGasLimit(
      _gaslimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGaslimits(
      _chain: BigNumberish,
      _type: BigNumberish,
      _gaslimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMessageBus(
      _messageBus: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(
      _feed: BigNumberish,
      _oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracleUpdateBuffer(
      _feed: BigNumberish,
      _oracleUpdateBuffer: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReceiver(_receiver: string, overrides?: CallOverrides): Promise<void>;

    setVault(_vault: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BnbChangeUpdated(uint256)"(amount?: null): BnbChangeUpdatedEventFilter;
    BnbChangeUpdated(amount?: null): BnbChangeUpdatedEventFilter;

    "CompensationRateUpdated(uint256)"(
      rate?: null
    ): CompensationRateUpdatedEventFilter;
    CompensationRateUpdated(rate?: null): CompensationRateUpdatedEventFilter;

    "CreateProxyGasLimitUpdated(uint256)"(
      gaslimit?: null
    ): CreateProxyGasLimitUpdatedEventFilter;
    CreateProxyGasLimitUpdated(
      gaslimit?: null
    ): CreateProxyGasLimitUpdatedEventFilter;

    "FarmingMessageReceived(address,uint64,uint64,uint8,address,uint256,uint256)"(
      sender?: null,
      srcChainId?: null,
      nonce?: null,
      msgType?: null,
      acount?: null,
      pid?: null,
      amount?: null
    ): FarmingMessageReceivedEventFilter;
    FarmingMessageReceived(
      sender?: null,
      srcChainId?: null,
      nonce?: null,
      msgType?: null,
      acount?: null,
      pid?: null,
      amount?: null
    ): FarmingMessageReceivedEventFilter;

    "FeeClaimed(uint256,bool)"(
      amount?: null,
      success?: null
    ): FeeClaimedEventFilter;
    FeeClaimed(amount?: null, success?: null): FeeClaimedEventFilter;

    "GasLimitUpdated(uint8,uint8,uint256)"(
      chain?: null,
      msgtype?: null,
      gaslimit?: null
    ): GasLimitUpdatedEventFilter;
    GasLimitUpdated(
      chain?: null,
      msgtype?: null,
      gaslimit?: null
    ): GasLimitUpdatedEventFilter;

    "MessageBusUpdated(address)"(
      messageBus?: null
    ): MessageBusUpdatedEventFilter;
    MessageBusUpdated(messageBus?: null): MessageBusUpdatedEventFilter;

    "NewOracle(address)"(oracle?: null): NewOracleEventFilter;
    NewOracle(oracle?: null): NewOracleEventFilter;

    "OracleBufferUpdated(uint8,uint256)"(
      feed?: null,
      oracleUpdateBuffer?: null
    ): OracleBufferUpdatedEventFilter;
    OracleBufferUpdated(
      feed?: null,
      oracleUpdateBuffer?: null
    ): OracleBufferUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ReceiverUpdated(address)"(receiver?: null): ReceiverUpdatedEventFilter;
    ReceiverUpdated(receiver?: null): ReceiverUpdatedEventFilter;

    "VaultUpdated(address)"(vault?: null): VaultUpdatedEventFilter;
    VaultUpdated(vault?: null): VaultUpdatedEventFilter;
  };

  estimateGas: {
    BNB_CHANGE(overrides?: CallOverrides): Promise<BigNumber>;

    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    COMPENSATION_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    EXCHANGE_RATE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_COMPENSATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_COMPENSATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    Vault(overrides?: CallOverrides): Promise<BigNumber>;

    claimFee(
      _gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compensationRate(overrides?: CallOverrides): Promise<BigNumber>;

    createProxyGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    drainToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    estimateGaslimit(
      _chain: BigNumberish,
      _account: string,
      _msgType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg3: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gaslimits(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    is1st(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    messageBus(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    oracleUpdateBuffer(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    sendFarmMessage(
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBnbChange(
      _change: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCompensationRate(
      _rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCreateProxyGasLimit(
      _gaslimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGaslimits(
      _chain: BigNumberish,
      _type: BigNumberish,
      _gaslimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      _feed: BigNumberish,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracleUpdateBuffer(
      _feed: BigNumberish,
      _oracleUpdateBuffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BNB_CHANGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COMPENSATION_PRECISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CROSS_FARMING_RECEIVER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EXCHANGE_RATE_PRECISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_COMPENSATION_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_COMPENSATION_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimFee(
      _gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compensationRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createProxyGasLimit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    drainToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    estimateGaslimit(
      _chain: BigNumberish,
      _account: string,
      _msgType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      arg3: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gaslimits(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    is1st(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracleUpdateBuffer(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendFarmMessage(
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBnbChange(
      _change: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCompensationRate(
      _rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCreateProxyGasLimit(
      _gaslimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGaslimits(
      _chain: BigNumberish,
      _type: BigNumberish,
      _gaslimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      _feed: BigNumberish,
      _oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracleUpdateBuffer(
      _feed: BigNumberish,
      _oracleUpdateBuffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
