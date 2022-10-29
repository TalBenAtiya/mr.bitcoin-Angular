import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { lastValueFrom, Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Transaction } from 'src/models/transaction.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  contact!: Contact
  paramsSubscription!: Subscription
  amount?: number
  msg?: string

  async ngOnInit() {
    this.paramsSubscription = this.route.data.subscribe(data => {
      const contact = data['contact']
      if (contact) this.contact = contact
    })
  }

  goBack() {
    this.router.navigate(['/contact'])
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }

  handleTransaction() {
    const transaction = {
      amount: this.amount,
      to: this.contact.name
    } as Transaction
    const isTransferd = this.userService.handleTransaction(transaction)
    this.msg = isTransferd ? 'Successful Transaction!' : 'Transaction Failed, Try Again Later..'
    setTimeout(() => {
      this.msg = ''
    }, 5000)
  }
}
