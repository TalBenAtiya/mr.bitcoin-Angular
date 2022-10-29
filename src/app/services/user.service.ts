import { User } from "src/models/user.model"
import { Injectable } from "@angular/core"
import { Observable, throwError, BehaviorSubject } from "rxjs"
import { storageService } from "./async-storage.service"
import { Transaction } from "src/models/transaction.model"

const USER = {
    name: "Tal Ben Atiya",
    balance: 100,
    moves: []
}

const STORAGE_KEY = 'loggedInUser'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUser() {
        let user = this._loadFromStorage(STORAGE_KEY)
        if (!user) return null
        return user
    }

    handleTransaction(transaction: Transaction) {
        transaction.at = Date.now()
        let user = this._loadFromStorage(STORAGE_KEY)
        transaction.from = user.name
        if (user.balance >= transaction.amount && transaction.amount > 0) {
            user.balance -= transaction.amount
            if (user.moves) user.moves.unshift(transaction)
            else user.moves = [transaction]
            this._saveToStorage(STORAGE_KEY, user)
            return true
        } else {
            return false
        }
    }

    login(username: string) {
        let user = this._loadFromStorage(STORAGE_KEY)
        if (!user || user.name !== username) {
            user = this.getEmptyUser()
            user.name = username
            this._saveToStorage(STORAGE_KEY, user)
        }
        return user
    }

    getEmptyUser() {
        return {
            name: "",
            balance: 100,
            transactions: [],
        }
    }

    _saveToStorage(key: string, value: User) {
        const str = JSON.stringify(value);
        localStorage.setItem(key, str);
    }

    _loadFromStorage(key: string) {
        const str = localStorage.getItem(key)
        if (str) return JSON.parse(str)
    }
}