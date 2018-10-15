import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent implements OnInit {

  speakers = [
    {name: 'Speaker1', img: '1.jpg', post: 'Manager, Envato'},
    {name: 'Speaker2', img: '2.jpg', post: 'Web design'},
    {name: 'Speaker3', img: '3.jpg', post: 'AI'}
  ];

  schedule = [
    {time: '09:00 Am - 10:30 AM', content: 'Speach On blalal' , by: 'speaker1', img: '19.jpg'},
    {time: '09:00 Am - 10:30 AM', content: 'Speach On blalal' , by: 'speaker2', img: '20.jpg'},
    {time: '09:00 Am - 10:30 AM', content: 'Speach On blalal' , by: 'speaker3', img: '21.jpg'},
    {time: '09:00 Am - 10:30 AM', content: 'Speach On blalal' , by: 'speaker3', img: '22.jpg'}
  ];

  gallery = [
    {img: '1.jpg', title: 'Photo One'},
    {img: '2.jpg', title: 'Photo Two'},
    {img: '3.jpg', title: 'Photo Three'},
    {img: '4.jpg', title: 'Photo Four'},
    {img: '5.jpg', title: 'Photo Five'},
    {img: '6.jpg', title: 'Photo Six'},
  ];

  sponsors = ['logo-1.png', 'logo-2.png', 'logo-3.png', 'logo-4.png', 'logo-5.png', 'logo-6.png'];

  constructor() { }

  ngOnInit() {
  }

}
