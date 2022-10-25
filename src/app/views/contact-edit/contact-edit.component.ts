import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/models/contact.model';
import { ContactService } from 'src/services/contact.service';
import { lastValueFrom ,Subscription } from 'rxjs'

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  contact!: Contact
  paramsSubscription!: Subscription

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(async ({ id }) => {
            if (id) {
                const contact = await lastValueFrom(this.contactService.getContactById(id))
                if (contact) this.contact = contact
            } else {
              this.contact = this.contactService.getEmptyContact()
            }
        })
  }

  async onSaveContact() {
    console.log('this.contact:', this.contact)
      await lastValueFrom(this.contactService.saveContact(this.contact))
      this.router.navigateByUrl('/contact')
  }

  goBack() {
    this.router.navigate(['/contact'])
  }
}
