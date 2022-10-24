import { User } from "src/models/user.model"
import { Injectable } from "@angular/core"
import { Observable, throwError, BehaviorSubject } from "rxjs"

const USER = {
    name: "Tal Ben Atiya",
    balance: 100,
    moves: []
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user: User = USER;

    getUser() {
        return this.user
    }
}
