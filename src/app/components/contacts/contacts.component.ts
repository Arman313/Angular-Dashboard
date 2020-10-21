import { Component, OnInit } from '@angular/core';
import { DATA } from './data'

// temporary dummy data
const ELEMENT_DATA = DATA;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['position','name','email', 'phone', 'address','title'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {

  }

}
