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
    { id: 6, name: 'Formation en sponsoring et techniques de négociation ', img: '6.png' },
    { id: 7, name: 'Formation en Prospection du client ', img: '7.jpg' },
    { id: 8, name: 'Formation en Event Management ', img: '8.jpg' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
