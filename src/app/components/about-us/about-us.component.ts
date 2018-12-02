import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutus;
  constructor() { }

  ngOnInit() {
    this.aboutus = data['aboutus'];
  }

}
