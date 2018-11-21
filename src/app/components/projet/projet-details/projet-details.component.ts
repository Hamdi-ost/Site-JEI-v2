import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../../assets/contenu.json';
import { ScriptsLoaderService } from 'src/app/services/scripts-loader.service.js';


@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.component.html',
  styleUrls: ['./projet-details.component.css']
})
export class ProjetDetailsComponent  implements OnInit {

  name ;
  client;
  date;
  sujet;
  url;
  contact;
  presentationEntreprise;
  presentationProjet;
  membreAffectees;
  logo;
  demo;
  temoignageClient;
  socialMedia;
  video;

  getDetails(id) {
    const details = data['projets'].filter(detail => {
      if (detail.id === Number(id)) {
        this.name = detail.name;
        this.date = detail.date;
        this.client = detail.client;
        this.sujet = detail.sujet;
        this.url = detail.url;
        this.contact = detail.contact;
        this.presentationEntreprise = detail.presentationEntreprise;
        this.presentationProjet = detail.presentationProjet;
        this.membreAffectees = detail.membreAffectees;
        this.logo = detail.logo;
        this.demo = detail.demo;
        this.temoignageClient = detail.temoignageClient;
        this.socialMedia = detail.socialMedia;
        this.video = detail.video;
      }
    });
  }
  constructor(private route: ActivatedRoute, private _script: ScriptsLoaderService) {
    this.route.params.subscribe(params => {
    this.getDetails(params['id']);
    });

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
