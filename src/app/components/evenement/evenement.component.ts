import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  mandatList = ['2013', '2014', '2015', '2016', '2017'];
  evenements = [
    { id: 1, name: 'Event1', img: '1.jpg'},
    { id: 2, name: 'Event2', img: '2.jpg'},
    { id: 3, name: 'Event3', img: '3.jpg'},
    { id: 4, name: 'Event4', img: '4.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
