import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as data from '../../../assets/contenu.json';
import { ScriptsLoaderService } from 'src/app/services/scripts-loader.service.js';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets;

  constructor( private _script: ScriptsLoaderService) {
    this.projets = data['projets'];
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
 }

}
