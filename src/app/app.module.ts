import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
import { ErrorComponent } from './components/error/error.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EvenementDetailsComponent } from './components/evenement/evenement-details/evenement-details.component';
import { ProjetDetailsComponent } from './components/projet/projet-details/projet-details.component';
import { YearsNavbarService } from './services/yearsNavbar.service';
import { YearsNavbarComponent } from './components/years-navbar/years-navbar.component';
import { FormationDetailsComponent } from './components/formation/formation-details/formation-details.component';
import { ActualiteDetailsComponent } from './components/actualite/actualite-details/actualite-details.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DelayResolverService } from './services/delay-resolver.service';


const appRoutes: Routes = [
  { path: 'actualite', component: ActualiteComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'actualite/:year/:id', component: ActualiteDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'projet', component: ProjetComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'structure', component: StructureComponent },
  { path: '', component: HomeComponent },
  { path: 'evenements/:id', component: EvenementDetailsComponent },
  { path: 'formations/:id', component: FormationDetailsComponent },
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
    YearsNavbarComponent,
    FormationDetailsComponent,
    ActualiteDetailsComponent,
    AboutUsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxSpinnerModule
  ],
  providers: [YearsNavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
