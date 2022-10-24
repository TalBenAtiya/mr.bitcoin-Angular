import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  
  constructor() { }
  @Input() contact!: Contact
  @Output() remove = new EventEmitter<string>()
  @Output() setId = new EventEmitter<string>()

  ngOnInit(): void {

  }

}
