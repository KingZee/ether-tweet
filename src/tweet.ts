import { log } from "@graphprotocol/graph-ts"
import { TweetCall } from "../generated/templates/TweetAccount/TweetAccount"
import { Registry, Account, Tweet} from "../generated/schema"

export function handleTweet(call: TweetCall): void {
    log.info('I am indeed called', [])
    let tweet = new Tweet(call.transaction.hash.toString())
    tweet.timestamp = call.block.timestamp
    tweet.account = getAccountByAddress(call.from.toHexString()).id
    tweet.text = call.inputs.tweetString
    tweet.save()
}

function getAccountByAddress(address: String) : Account {
    let registry = Registry.load("0")
    for(let i = 0 ; i < registry.count ; i++){
        let account = Account.load(i.toString())
        if(account.address === address) return account as Account
    }
    return new Account("0") //HandleTweet will by default revert if called by anyone other than its owner  
}