import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {    console.log(document.scripts); }

  ngOnInit() {
  }

  loadScripts() {

    console.log(document.scripts);

  //  document.getElementById('script1').remove();
  //  const script1 = document.createElement('script');
  //  script1.setAttribute('id', 'script1');
  //  script1.setAttribute('src', '../../../assets/js/modernizr.min.js');
  //  document.head.appendChild(script1);

  //  document.getElementById('script2').remove();
  //  const script2 = document.createElement('script');
  //  script2.setAttribute('id', 'script2');
  //  script2.setAttribute('src', '../../../assets/js/angular.min.js');
  //  document.head.appendChild(script2);

  //  document.getElementById('script3').remove();
  //  const script3 = document.createElement('script');
  //  script3.setAttribute('id', 'script3');
  //  script3.setAttribute('src', '../../../assets/js/angular-animate.min.js');
  //  document.head.appendChild(script3);

  //  document.getElementById('script4').remove();
  //  const script4 = document.createElement('script');
  //  script4.setAttribute('id', 'script4');
  //  script4.setAttribute('src', '../../../assets/js/angular-aria.min.js');
  //  document.head.appendChild(script4);

  //  document.getElementById('script5').remove();
  //  const script5 = document.createElement('script');
  //  script5.setAttribute('id', 'script5');
  //  script5.setAttribute('src', '../../../assets/js/angular-messages.min.js');
  //  document.head.appendChild(script5);

  //  document.getElementById('script6').remove();
  //  const script6 = document.createElement('script');
  //  script6.setAttribute('id', 'script6');
  //  script6.setAttribute('src', '../../../assets/js/angular-material.min.js');
  //  document.head.appendChild(script6);

  //  document.getElementById('script7').remove();
  //  const script7 = document.createElement('script');
  //  script7.setAttribute('id', 'script7');
  //  script7.setAttribute('src', '../../../assets/js/assets-cache.js');
  //  document.head.appendChild(script7);

  //  document.getElementById('script8').remove();
  //  const script8 = document.createElement('script');
  //  script8.setAttribute('id', 'script8');
  //  script8.setAttribute('src', '../../../assets/js/app.js');
  //  document.head.appendChild(script8);

  //  document.getElementById('script9').remove();
  //  const script9 = document.createElement('script');
  //  script9.setAttribute('id', 'script9');
  //  script9.setAttribute('src', '../../../assets/js/jquery-2.1.4.min.js');
  //  document.head.appendChild(script9);

  //  document.getElementById('script10').remove();
  //  const script10 = document.createElement('script');
  //  script10.setAttribute('id', 'script10');
  //  script10.setAttribute('src', '../../../assets/js/jquery.easing.js');
  //  document.head.appendChild(script10);

  //  document.getElementById('script11').remove();
  //  const script11 = document.createElement('script');
  //  script11.setAttribute('id', 'script11');
  //  script11.setAttribute('src', '../../../assets/js/morphext.min.js');
  //  document.head.appendChild(script11);

  //  document.getElementById('script12').remove();
  //  const script12 = document.createElement('script');
  //  script12.setAttribute('id', 'script12');
  //  script12.setAttribute('src', '../../../assets/js/bootstrap.min.js');
  //  document.head.appendChild(script12);

  //  document.getElementById('script13').remove();
  //  const script13 = document.createElement('script');
  //  script13.setAttribute('id', 'script13');
  //  script13.setAttribute('src', '../../../assets/js/jquery.sticky.js');
  //  document.head.appendChild(script13);

  //  document.getElementById('script14').remove();
  //  const script14 = document.createElement('script');
  //  script14.setAttribute('id', 'script14');
  //  script14.setAttribute('src', '../../../assets/js/jquery.scrollTo.min.js');
  //  document.head.appendChild(script14);

  //  document.getElementById('script15').remove();
  //  const script15 = document.createElement('script');
  //  script15.setAttribute('id', 'script15');
  //  script15.setAttribute('src', '../../../assets/js/jquery.localScroll.min.js');
  //  document.head.appendChild(script15);

  //  document.getElementById('script16').remove();
  //  const script16 = document.createElement('script');
  //  script16.setAttribute('id', 'script16');
  //  script16.setAttribute('src', '../../../assets/js/jquery.magnific-popup.min.js');
  //  document.head.appendChild(script16);

  //  document.getElementById('script17').remove();
  //  const script17 = document.createElement('script');
  //  script17.setAttribute('id', 'script17');
  //  script17.setAttribute('src', '../../../assets/js/owl.carousel.js');
  //  document.head.appendChild(script17);

  //  document.getElementById('script18').remove();
  //  const script18 = document.createElement('script');
  //  script18.setAttribute('id', 'script18');
  //  script18.setAttribute('src', '../../../assets/js/owl.carousel.js');
  //  document.head.appendChild(script18);

  //  document.getElementById('script19').remove();
  //  const script19 = document.createElement('script');
  //  script19.setAttribute('id', 'script19');
  //  script19.setAttribute('src', '../../../assets/js/jquery.flexslider-min.js');
  //  document.head.appendChild(script19);

  //  document.getElementById('script20').remove();
  //  const script20 = document.createElement('script');
  //  script20.setAttribute('id', 'script20');
  //  script20.setAttribute('src', '../../../assets/js/wew.min.js');
  //  document.head.appendChild(script20);

  //  document.getElementById('script21').remove();
  //  const script21 = document.createElement('script');
  //  script21.setAttribute('id', 'script21');
  //  script21.setAttribute('src', '../../../assets/js/scrolltopcontrol.js');
  //  document.head.appendChild(script21);

  //  document.getElementById('script22').remove();
  //  const script22 = document.createElement('script');
  //  script22.setAttribute('id', 'script22');
  //  script22.setAttribute('src', '../../../assets/js/jquery.slicknav.js');
  //  document.head.appendChild(script22);

  //  document.getElementById('script23').remove();
  //  const script23 = document.createElement('script');
  //  script23.setAttribute('id', 'script23');
  //  script23.setAttribute('src', '../../../assets/js/jquery.filterizr.min.js');
  //  document.head.appendChild(script23);

  //  document.getElementById('script24').remove();
  //  const script24 = document.createElement('script');
  //  script24.setAttribute('id', 'script24');
  //  script24.setAttribute('src', '../../../assets/js/wow.min.js');
  //  document.head.appendChild(script24);

  //  document.getElementById('script25').remove();
  //  const script25 = document.createElement('script');
  //  script25.setAttribute('id', 'script25');
  //  script25.setAttribute('src', '../../../assets/js/script.js');
  //  document.head.appendChild(script25);

}
}
