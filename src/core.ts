import { BigInt, store,  ethereum } from "@graphprotocol/graph-ts"
import { AdminSetAccountAdministratorCall, AdminSetRegistrationDisabledCall, AdminUnregisterCall, RegisterCall, UnregisterCall } from "../generated/TweetRegistry/TweetRegistry"
import { Registry, Account } from "../generated/schema"

let ZERO = new BigInt(0)

export function handleSetRegistration(call: AdminSetRegistrationDisabledCall): void {
    let registry = getOrCreateRegistry()   //Registry will always exist when these functions are called
    registry.enabled = call.inputs.registrationDisabled
    registry.save()
}

export function handleSetAccountAdministrator(call: AdminSetAccountAdministratorCall): void {
    let registry = getOrCreateRegistry()
    registry.owner = call.inputs.accountAdmin.toHexString()
    registry.save()
    BigInt.fromI32(0)
}

export function handleRegister(call: RegisterCall): void {
    if(call.outputs.result.equals(ZERO)){
        let registry = getOrCreateRegistry()
        let last = registry.count
        let account = new Account(last.toString())
        account.name = call.inputs.name
        account.address = call.inputs.accountAddress.toHexString()
        account.registry = registry.id
        account.save()
        registry.count++
        registry.save()
    }
}

export function handleUnregister(call: UnregisterCall): void {
    store.remove("Account", getAccountByName(call.outputs.unregisteredAccountName).id)
}

export function handleAdminUnregister(call: AdminUnregisterCall): void {
    store.remove("Account", getAccountByName(call.inputs.name).id)
}

function getOrCreateRegistry() : Registry {
    let exists = store.get("Registry", "0") != null
        if(!exists) {
            let registry = new Registry("0")
            registry.owner = "0x26dd6b7a2fff271aa7c5fe8cfb5ba0ab33f47408"
            registry.enabled = true
            registry.count = 0
            registry.save()
            return registry
        } else return Registry.load("0") as Registry
}

function getAccountByName(name: String) : Account {
    let registry = getOrCreateRegistry()
    for(let i = 0 ; i < registry.count ; i++){
        let account = Account.load(i.toString())
        if(account.name === name) return account as Account
    }
    return new Account("0")
}