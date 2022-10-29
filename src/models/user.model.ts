import { Transaction } from "./transaction.model";

export class User {

    constructor(
        public name: string = '',
        public balance: number = 100,
        public moves: Array<Transaction> = []) {
    }
}