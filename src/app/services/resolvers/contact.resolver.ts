import { inject, Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Contact } from 'src/models/contact.model';
import { ContactService } from '../contact.service'; 

@Injectable({
    providedIn: 'root'
})

export class ContactResolver implements Resolve<Promise<Contact>> {
    contactService = inject(ContactService)

   async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id']
        const contact = await this.contactService.getContactById(id)
        console.log(contact);
        return contact
    }
}
