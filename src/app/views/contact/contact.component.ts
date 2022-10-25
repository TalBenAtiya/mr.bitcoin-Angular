import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { Observable, Subscription } from 'rxjs';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts!: Contact[]
  subscription!: Subscription
  selectedId!: string
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts({ term: "" })
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  removeContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }
}
