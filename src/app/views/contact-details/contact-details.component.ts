import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/models/contact.model';
import { lastValueFrom } from 'rxjs';
import { ContactService } from 'src/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  @Input() selectedId!: string
  @Output() setId = new EventEmitter<string>()
  contact!: Contact

  async ngOnInit() {
    const contact = await lastValueFrom(this.contactService.getContactById(this.selectedId))
    if (contact) this.contact = contact
}

}
