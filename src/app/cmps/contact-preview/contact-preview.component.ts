import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() contact!: Contact
  @Output() remove = new EventEmitter<string>()
  @Output() setId = new EventEmitter<string>()

  ngOnInit(): void {

  }

  goToEdit(ev: Event) {
    ev.stopPropagation()
    this.router.navigate(['/contact/edit', this.contact._id])
  }

  onRemoveContact(ev: Event) {
    ev.stopPropagation()
    this.remove.emit(this.contact._id)
  }
}
