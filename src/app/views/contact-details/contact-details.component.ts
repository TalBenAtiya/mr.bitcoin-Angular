import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { lastValueFrom, Subscription } from 'rxjs';
import { ContactService } from 'src/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  contact!: Contact
  paramsSubscription!: Subscription

  async ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(async params => {
      const contact = await lastValueFrom(this.contactService.getContactById(params['id']))
      console.log('contact:', contact)
      if (contact) this.contact = contact
    })
  }

  goBack() {
    this.router.navigate(['/contact'])
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }
}
