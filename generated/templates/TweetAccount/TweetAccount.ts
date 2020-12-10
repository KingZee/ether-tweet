// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TweetAccount__getLatestTweetResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: string, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class TweetAccount__getTweetResult {
  value0: string;
  value1: BigInt;

  constructor(value0: string, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class TweetAccount extends ethereum.SmartContract {
  static bind(address: Address): TweetAccount {
    return new TweetAccount("TweetAccount", address);
  }

  getOwnerAddress(): Address {
    let result = super.call(
      "getOwnerAddress",
      "getOwnerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getOwnerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getOwnerAddress",
      "getOwnerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLatestTweet(): TweetAccount__getLatestTweetResult {
    let result = super.call(
      "getLatestTweet",
      "getLatestTweet():(string,uint256,uint256)",
      []
    );

    return new TweetAccount__getLatestTweetResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getLatestTweet(): ethereum.CallResult<
    TweetAccount__getLatestTweetResult
  > {
    let result = super.tryCall(
      "getLatestTweet",
      "getLatestTweet():(string,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TweetAccount__getLatestTweetResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  isAdmin(): boolean {
    let result = super.call("isAdmin", "isAdmin():(bool)", []);

    return result[0].toBoolean();
  }

  try_isAdmin(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAdmin", "isAdmin():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getTweet(tweetId: BigInt): TweetAccount__getTweetResult {
    let result = super.call("getTweet", "getTweet(uint256):(string,uint256)", [
      ethereum.Value.fromUnsignedBigInt(tweetId)
    ]);

    return new TweetAccount__getTweetResult(
      result[0].toString(),
      result[1].toBigInt()
    );
  }

  try_getTweet(
    tweetId: BigInt
  ): ethereum.CallResult<TweetAccount__getTweetResult> {
    let result = super.tryCall(
      "getTweet",
      "getTweet(uint256):(string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(tweetId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TweetAccount__getTweetResult(value[0].toString(), value[1].toBigInt())
    );
  }

  getNumberOfTweets(): BigInt {
    let result = super.call(
      "getNumberOfTweets",
      "getNumberOfTweets():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumberOfTweets(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfTweets",
      "getNumberOfTweets():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tweet(tweetString: string): BigInt {
    let result = super.call("tweet", "tweet(string):(int256)", [
      ethereum.Value.fromString(tweetString)
    ]);

    return result[0].toBigInt();
  }

  try_tweet(tweetString: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tweet", "tweet(string):(int256)", [
      ethereum.Value.fromString(tweetString)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AdminDeleteAccountCall extends ethereum.Call {
  get inputs(): AdminDeleteAccountCall__Inputs {
    return new AdminDeleteAccountCall__Inputs(this);
  }

  get outputs(): AdminDeleteAccountCall__Outputs {
    return new AdminDeleteAccountCall__Outputs(this);
  }
}

export class AdminDeleteAccountCall__Inputs {
  _call: AdminDeleteAccountCall;

  constructor(call: AdminDeleteAccountCall) {
    this._call = call;
  }
}

export class AdminDeleteAccountCall__Outputs {
  _call: AdminDeleteAccountCall;

  constructor(call: AdminDeleteAccountCall) {
    this._call = call;
  }
}

export class AdminRetrieveDonationsCall extends ethereum.Call {
  get inputs(): AdminRetrieveDonationsCall__Inputs {
    return new AdminRetrieveDonationsCall__Inputs(this);
  }

  get outputs(): AdminRetrieveDonationsCall__Outputs {
    return new AdminRetrieveDonationsCall__Outputs(this);
  }
}

export class AdminRetrieveDonationsCall__Inputs {
  _call: AdminRetrieveDonationsCall;

  constructor(call: AdminRetrieveDonationsCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AdminRetrieveDonationsCall__Outputs {
  _call: AdminRetrieveDonationsCall;

  constructor(call: AdminRetrieveDonationsCall) {
    this._call = call;
  }
}

export class TweetCall extends ethereum.Call {
  get inputs(): TweetCall__Inputs {
    return new TweetCall__Inputs(this);
  }

  get outputs(): TweetCall__Outputs {
    return new TweetCall__Outputs(this);
  }
}

export class TweetCall__Inputs {
  _call: TweetCall;

  constructor(call: TweetCall) {
    this._call = call;
  }

  get tweetString(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class TweetCall__Outputs {
  _call: TweetCall;

  constructor(call: TweetCall) {
    this._call = call;
  }

  get result(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}