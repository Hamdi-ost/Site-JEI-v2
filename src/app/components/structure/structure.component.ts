import { Component } from '@angular/core';


@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent {
  
departementList = ["departement1","departement2","departement3","departement4"];

verifDepartement1=false;
verifDepartement2=false;
verifDepartement3=false;
verifDepartement4=false;

 constructor (){
 }
 
 onDepartement(i){
  switch(i) { 
    case 0: { 
      this.verifDepartement1=!this.verifDepartement1; 
       break; 
    } 
    case 1: { 
      this.verifDepartement2=!this.verifDepartement2;
       break; 
    } 
    case 2: { 
      this.verifDepartement3=!this.verifDepartement3;
       break; 
    } 
    default: { 
      this.verifDepartement4=!this.verifDepartement4;
       break; 
    } 
  }   
 }
}