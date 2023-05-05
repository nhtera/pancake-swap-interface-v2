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

export interface CrossFarmingProxyInterface extends utils.Interface {
  functions: {
    "CAKE()": FunctionFragment;
    "MASTER_CHEF_V2()": FunctionFragment;
    "approved(address)": FunctionFragment;
    "deposit(uint256,uint256,uint64)": FunctionFragment;
    "emergencyWithdraw(uint256,uint64)": FunctionFragment;
    "factory()": FunctionFragment;
    "fallbackDeposit(uint256,uint64)": FunctionFragment;
    "fallbackNonce(uint256,uint64)": FunctionFragment;
    "fallbackWithdraw(uint256,uint256,uint64)": FunctionFragment;
    "harvest(uint256)": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "latestNonce(uint256)": FunctionFragment;
    "user()": FunctionFragment;
    "userInfo(uint256)": FunctionFragment;
    "withdraw(uint256,uint256,uint64)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "CAKE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MASTER_CHEF_V2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "approved", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fallbackDeposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fallbackNonce",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fallbackWithdraw",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "latestNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "user", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "CAKE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MASTER_CHEF_V2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fallbackDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fallbackNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fallbackWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256,uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256,uint256)": EventFragment;
    "FallbackDeposit(address,uint256,uint64)": EventFragment;
    "FallbackWithdraw(address,uint256,uint256,uint64)": EventFragment;
    "Harvest(address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { caller: string; pid: BigNumber; amount: BigNumber }
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export type FallbackDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; nonce: BigNumber }
>;

export type FallbackDepositEventFilter = TypedEventFilter<FallbackDepositEvent>;

export type FallbackWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type FallbackWithdrawEventFilter =
  TypedEventFilter<FallbackWithdrawEvent>;

export type HarvestEvent = TypedEvent<
  [string, BigNumber],
  { user: string; pid: BigNumber }
>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface CrossFarmingProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CrossFarmingProxyInterface;

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
    CAKE(overrides?: CallOverrides): Promise<[string]>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<[string]>;

    approved(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    fallbackDeposit(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fallbackNonce(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    fallbackWithdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvest(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _user: string,
      _cake: string,
      _mcv2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    latestNonce(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    user(overrides?: CallOverrides): Promise<[string]>;

    userInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CAKE(overrides?: CallOverrides): Promise<string>;

  MASTER_CHEF_V2(overrides?: CallOverrides): Promise<string>;

  approved(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: BigNumberish,
    _nonce: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  fallbackDeposit(
    _pid: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fallbackNonce(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  fallbackWithdraw(
    _pid: BigNumberish,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvest(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _user: string,
    _cake: string,
    _mcv2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  latestNonce(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  user(overrides?: CallOverrides): Promise<string>;

  userInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _pid: BigNumberish,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CAKE(overrides?: CallOverrides): Promise<string>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<string>;

    approved(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    fallbackDeposit(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fallbackNonce(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fallbackWithdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    harvest(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    initialize(
      _user: string,
      _cake: string,
      _mcv2: string,
      overrides?: CallOverrides
    ): Promise<void>;

    latestNonce(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user(overrides?: CallOverrides): Promise<string>;

    userInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): DepositEventFilter;

    "EmergencyWithdraw(address,uint256,uint256)"(
      caller?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      caller?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;

    "FallbackDeposit(address,uint256,uint64)"(
      user?: string | null,
      pid?: null,
      nonce?: null
    ): FallbackDepositEventFilter;
    FallbackDeposit(
      user?: string | null,
      pid?: null,
      nonce?: null
    ): FallbackDepositEventFilter;

    "FallbackWithdraw(address,uint256,uint256,uint64)"(
      user?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): FallbackWithdrawEventFilter;
    FallbackWithdraw(
      user?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): FallbackWithdrawEventFilter;

    "Harvest(address,uint256)"(
      user?: string | null,
      pid?: null
    ): HarvestEventFilter;
    Harvest(user?: string | null, pid?: null): HarvestEventFilter;

    "Withdraw(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    CAKE(overrides?: CallOverrides): Promise<BigNumber>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<BigNumber>;

    approved(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    fallbackDeposit(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fallbackNonce(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fallbackWithdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvest(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _user: string,
      _cake: string,
      _mcv2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    latestNonce(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user(overrides?: CallOverrides): Promise<BigNumber>;

    userInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CAKE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASTER_CHEF_V2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approved(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fallbackDeposit(
      _pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fallbackNonce(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fallbackWithdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvest(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _user: string,
      _cake: string,
      _mcv2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    latestNonce(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    user(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
