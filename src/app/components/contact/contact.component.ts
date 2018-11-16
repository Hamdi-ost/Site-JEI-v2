import { NgModule, Component, OnInit } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name;
  email;
  subject;
  university;

  constructor() { }

  ngOnInit() {
  }


}
