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
import {ErrorComponent} from './components/error/error.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { EvenementDetailsComponent } from './components/evenement/evenement-details/evenement-details.component';
import { ProjetDetailsComponent } from './components/projet/projet-details/projet-details.component';
import { YearsNavbarService } from './services/years-navbar.service';
import { YearsNavbarComponent } from './components/years-navbar/years-navbar.component';

const appRoutes: Routes = [
  { path: 'actualite', component: ActualiteComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'structure', component: StructureComponent },
  { path: '', component: HomeComponent },


  { path: 'evenements/:id', component: EvenementDetailsComponent },
  { path: 'projets/:id', component: ProjetDetailsComponent },
  { path: '**', redirectTo: 'not-found' }
];

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
    EvenementComponent,
    ErrorComponent,
    EvenementDetailsComponent,
    ProjetDetailsComponent,
    YearsNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [YearsNavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
