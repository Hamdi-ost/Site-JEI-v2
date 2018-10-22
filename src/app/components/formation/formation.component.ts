import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  mandatList = ['2013', '2014', '2015', '2016', '2017'];
  formations = [
    { id: 1, name: 'Formation attitude et leadership', img: '1.jpg' },
    { id: 2, name: 'Formation gestion du temps et du stress', img: '2.png' },
    { id: 3, name: 'Formation laravel', img: '3.jpg' },
    { id: 4, name: 'Formation photoshop 1ere session', img: '4.jpg' },
    { id: 5, name: 'Formation photoshop 2eme session', img: '4.jpg' },
    { id: 6, name: 'Formation sponsoring', img: '6.png' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
