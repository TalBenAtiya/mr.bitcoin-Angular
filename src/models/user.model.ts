export class User {

    constructor(
        public name: string = '',
        public balance: number = 100,
        public moves: Array<string> = []) {
    }
}