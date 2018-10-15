import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets = [
    { id: 1, name: 'Projet 1', img: 'services-1.jpg', decription: 'description 1'},
    { id: 2, name: 'Projet 2', img: 'services-2.jpg', decription: 'description 2'},
    { id: 3, name: 'Projet 3', img: 'services-3.jpg', decription: 'description 3'},
    { id: 4, name: 'Projet 4', img: 'services-4.jpg', decription: 'description 4'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
