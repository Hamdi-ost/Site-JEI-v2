import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormationComponent } from './components/formation/formation.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { StructureComponent } from './components/structure/structure.component';
import { ContactComponent } from './components/contact/contact.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { ProjetComponent } from './components/projet/projet.component';
import { EvenementComponent } from './components/evenement/evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormationComponent,
    ActualiteComponent,
    StructureComponent,
    ContactComponent,
    SponsorComponent,
    ProjetComponent,
    EvenementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
