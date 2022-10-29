export class Transaction {

    constructor(
        public to: string,
        public amount: number,
        public at: number,
    ) { }
}