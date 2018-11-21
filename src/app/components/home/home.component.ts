import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as data from '../../../assets/contenu.json';
import { ScriptsLoaderService } from 'src/app/services/scripts-loader.service.js';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  projets = [];
  evenements = [];
  actualites = [];
  sponsors = [];
  formations = [];

  constructor(private _script: ScriptsLoaderService) {

  }

  ngOnInit() {
    this._script.loadScripts('header', [
      '../../../assets/js/angular.min.js',
      '../../../assets/js/angular-animate.min.js',
      '../../../assets/js/angular-aria.min.js',
      '../../../assets/js/angular-messages.min.js',
      '../../../assets/js/angular-material.min.js',
      '../../../assets/js/assets-cache.js',
      '../../../assets/js/app.js',
      '../../../assets/js/jquery-2.1.4.min.js',
      '../../../assets/js/jquery.easing.js',
      '../../../assets/js/morphext.min.js',
      '../../../assets/js/bootstrap.min.js',
      '../../../assets/js/jquery.sticky.js',
      '../../../assets/js/jquery.scrollTo.min.',
      '../../../assets/js/jquery.localScroll.min.js',
      '../../../assets/js/jquery.magnific-popup.min.js',
      '../../../assets/js/owl.carousel.js',
      '../../../assets/js/owl.carousel.js',
      '../../../assets/js/jquery.flexslider-min.js',
      '../../../assets/js/wew.min.js',
      '../../../assets/js/scrolltopcontrol.js',
      '../../../assets/js/jquery.slicknav.js',
      '../../../assets/js/jquery.filterizr.min.js',
      '../../../assets/js/wow.min.js',
      '../../../assets/js/script.js',
    ], false);


    this.projets.push(data['projets'][0], data['projets'][1], data['projets'][2], data['projets'][3]);
    this.evenements = data['events'];
    this.sponsors = data['sponsors'];
    this.actualites.push(data['GlobalActualite'][0], data['GlobalActualite'][1], data['GlobalActualite'][2]);
    this.formations.push(data['formations'][0], data['formations'][1], data['formations'][2]);
  }


}
