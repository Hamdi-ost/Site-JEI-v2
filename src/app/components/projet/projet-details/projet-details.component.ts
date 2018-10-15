import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.css']
})
export class ProjetDetailsComponent implements OnInit {

  membres = [
    // tslint:disable-next-line:max-line-length
    {post: 'Chef d\'equipe', name: 'Xavier Frank', description: 'Nulla luctus tincidunt ex, commodo tincidunt est luctus at. Mauris fringilla dictum sem, a viverra mi consequat in. Nunc in ligula risus.', img: 'emp1.jpg', socialMedia: {facebook: '', linkedin: '', github: ''}},
    // tslint:disable-next-line:max-line-length
    {post: 'Site Engineer', name: 'Martin Lusia', description: 'Nulla luctus tincidunt ex, commodo tincidunt est luctus at. Mauris fringilla dictum sem, a viverra mi consequat in. Nunc in ligula risus.', img: 'emp2.jpg', socialMedia: {facebook: '', linkedin: '', github: ''}},
    // tslint:disable-next-line:max-line-length
    {post: 'Site Engineer', name: 'Maria Jas', description: 'Nulla luctus tincidunt ex, commodo tincidunt est luctus at. Mauris fringilla dictum sem, a viverra mi consequat in. Nunc in ligula risus.', img: 'emp3.jpg', socialMedia: {facebook: '', linkedin: '', github: ''}},
    // tslint:disable-next-line:max-line-length
    {post: 'Site Engineer', name: 'Martin Shaa', description: 'Nulla luctus tincidunt ex, commodo tincidunt est luctus at. Mauris fringilla dictum sem, a viverra mi consequat in. Nunc in ligula risus.', img: 'emp4.jpg', socialMedia: {facebook: '', linkedin: '', github: ''}}
  ];

  clients = [
    // tslint:disable-next-line:max-line-length
    {testimonial: 'n placerat augue eu dui rhoncus aliquet. Nulla eget fringilla elit. In eu neque ex. Integer scelerisque velit id iaculis malesuada. Donec auctor mollis ornare. Duis vulputate sed velit sed tempus.', name: 'RHONCUS ALIQUET', post: 'Lorem Ispum', img: 'profile-1.png'},
    // tslint:disable-next-line:max-line-length
    {testimonial: 'Quisque in est ut lacus sagittis semper id eget elit. Ut auctor vulputate massa vitae gravida. Aliquam id facilisis dui. Fusce iaculis, ex luctus vestibulum efficitur, eros urna rhoncus purus', name: 'SAGITTIS SEMPER', post: 'Lorem Ispum', img: 'profile-2.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
