import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Contact } from 'src/models/contact.model';
import { Transaction } from 'src/models/transaction.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }
  @Input() contact!: Contact
  user!: User
  transactions!: Transaction[]

  ngOnInit(): void {
    this.user = this.userService.getUser()

    if (this.contact) {
      console.log('user.moves:', this.user.moves)
      this.transactions = this.user.moves.filter(move => { return move.to === this.contact.name }).slice(0, 3)
      console.log('this.transactions:', this.transactions)
    } else {
      this.transactions = this.user.moves.slice(0, 3)
    }
  }
}
