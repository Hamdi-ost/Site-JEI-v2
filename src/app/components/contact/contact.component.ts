import { NgModule, Component, OnInit } from '@angular/core';



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

  lat = 36.843108;
  lng = 10.196867;

  constructor() { }

  ngOnInit() {
  }


}
