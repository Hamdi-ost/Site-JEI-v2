import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
  speakers = [
    { name: 'Formateur1', img: '1.jpg', post: 'formateurprospection' },

  ];



  gallery = [
    { img: '1.jpg', title: 'Photo One' },
    { img: '2.jpg', title: 'Photo Two' },
    { img: '3.jpg', title: 'Photo Three' },
    { img: '4.jpg', title: 'Photo Four' },
    { img: '5.jpg', title: 'Photo Five' },
    { img: '6.jpg', title: 'Photo Six' },
  ];


  constructor() { }

  ngOnInit() {
  }

}


