import { Component } from '@angular/core';


@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent {

  memberList = [
  {
    name: 'Mohamed Aziz FEKIH',
    office: 'Président',
    email: 'aziizfekih@gmail.com',
    facebook: 'https://www.facebook.com/azizfekih',
    linkedIn: 'https://www.linkedin.com/in/aziz-fekih-816026155/'
  },
  {
    name: 'Zeineb ATTIA',
    office: 'Vice Présidente',
    email: 'zeinebattia3@gmail.com',
    facebook: 'https://www.facebook.com/zeineb.attiaa',
    linkedIn: 'https://www.linkedin.com/in/zeineb-attia-229365170'
  },
  {
    name: 'Yosr MERCHAOUI',
    office: 'Secrétaire Générale',
    email: 'yosrmerchaoui@gmail.com',
    facebook: 'https://www.facebook.com/yossr.merchaoui.5',
    linkedIn: 'https://www.linkedin.com/in/yosr-merchaoui-78a407140/'
  },
  {
    name: 'Sarra DABBABI',
    office: 'Trésorière',
    email: '',
    facebook: '',
    linkedIn: ''
  },
  {
    name: 'Iheb KILANI',
    office: 'Résponsable communication',
    email: 'kilaniiheb7@gmail.com',
    facebook: 'https://www.facebook.com/iheb.kilani.7',
    linkedIn: 'https://www.linkedin.com/in/iheb-kilani-18a70b140/'
  },
  {
    name: 'Yasmine BOUSSAID',
    office: 'Résponsable événementiel',
    email: 'yasmineboussaid1109@gmail.com',
    facebook: 'https://www.facebook.com/yasmine.bsd.5',
    linkedIn: 'https://www.linkedin.com/in/yasmine-boussaid-7397ba71/'
  },
  {
    name: 'Mohamed Aziz BIBI',
    office: 'Résponsable projets et pospection',
    email: 'bibi.mohamedaziz@gmail.com',
    facebook: '',
    linkedIn: ''
  },
  {
    name: 'Amani CHEBBI',
    office: 'Résponsable Ressources Humaines',
    email: 'amani.chebbi.insat@gmail.com',
    facebook: 'https://www.facebook.com/amanichebbi97',
    linkedIn: 'https://www.linkedin.com/in/chebbi-amani-30845b154/'
  },
  {
    name: 'Houyem AIDI',
    office: 'Responsable sponsoring et partenariats',
    email: '',
    facebook: '',
    linkedIn: ''
  }
];


 constructor () {
 }

}
