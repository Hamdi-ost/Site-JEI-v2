import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  mandatList = ['2013', '2014', '2015', '2016', '2017'];
  formations = [
    { id: 1, name: 'Formation1', img: '1.jpg' },
    { id: 2, name: 'Formation2', img: '2.jpg' },
    { id: 3, name: 'Formation3', img: '3.jpg' },
    { id: 4, name: 'Formation4', img: '4.jpg' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
