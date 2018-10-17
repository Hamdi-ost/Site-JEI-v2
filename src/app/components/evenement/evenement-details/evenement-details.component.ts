import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/contenu.json';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent {

  speakers;
  schedule;
  gallery;
  sponsors;

  getDetails(id) {
    let i = 0;
    const details = [];
    while (data['events'].length > i && data['events'][i].id !== id) {
      console.log(data['events'][i].id);
      console.log(id);
      if (data['events'][0].id === 1) {
        details.push(data['events'][i]);
      }
      i++;
    }
    return details;

    /* const details = data['events'].filter(detail => {
       return detail.id === id;
     });*/

  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
     console.log(this.getDetails(params['id']));
    });

  }
}

