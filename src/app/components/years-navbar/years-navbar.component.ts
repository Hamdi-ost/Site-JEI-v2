import { Component, OnInit } from '@angular/core';
import { YearsNavbarService } from 'src/app/services/yearsNavbar.service';

@Component({
  selector: 'app-years-navbar',
  templateUrl: './years-navbar.component.html',
  styleUrls: ['./years-navbar.component.css']
})
export class YearsNavbarComponent implements OnInit {

  mandatList: any;
  constructor(private yearsNavbarService: YearsNavbarService) {
    this.mandatList = this.yearsNavbarService.mandatList;
   }
  ngOnInit() {
  }

}
