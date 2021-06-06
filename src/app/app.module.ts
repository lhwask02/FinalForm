import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { AjouterEnseignantComponent } from './components/ajouter-enseignant/ajouter-enseignant.component';
import { SchoolInfoComponent } from './components/school-info/school-info.component';
import { ListGroupeComponent } from './components/list-groupe/list-groupe.component';
import { ListEnseignantComponent } from './components/list-enseignant/list-enseignant.component';
import { ListProgrammeComponent } from './components/list-programme/list-programme.component';
import { AjouterGroupeComponent } from './components/ajouter-groupe/ajouter-groupe.component';
import { GererEmploiComponent } from './components/gerer-emploi/gerer-emploi.component';
import { GererProgrammesComponent } from './components/gerer-programmes/gerer-programmes.component';
import { GestionSallesComponent } from './components/gestion-salles/gestion-salles.component';
import { AssociationEleveGroupeComponent } from './components/association-eleve-groupe/association-eleve-groupe.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReversedEmploisComponent } from './components/reversed-emplois/reversed-emplois.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenusComponent } from './components/menus/menus.component';
import { FomulaireDePaiementComponent } from './components/fomulaire-de-paiement/fomulaire-de-paiement.component';
import { PaiementDesSalairesAComponent } from './components/paiement-des-salaires-a/paiement-des-salaires-a.component';
import { PaiementDesSalairesBComponent } from './components/paiement-des-salaires-b/paiement-des-salaires-b.component';
import { SituationDesPaiementsComponent } from './components/situation-des-paiements/situation-des-paiements.component';
import { HpPresenceComponent } from './components/hp-presence/hp-presence.component';
import { HpAbsenceComponent } from './components/hp-absence/hp-absence.component';
import { HistoriquePresenceComponent } from './components/historique-presence/historique-presence.component';
import { MainComponent } from './components/main/main.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { MiddleMenuComponent } from './components/middle-menu/middle-menu.component';
import {GlobaVarService } from './globa-var.service';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    AjouterEnseignantComponent,
    SchoolInfoComponent,
    ListGroupeComponent,
    ListEnseignantComponent,
    ListProgrammeComponent,
    AjouterGroupeComponent,
    GererEmploiComponent,
    GererProgrammesComponent,
    GestionSallesComponent,
    AssociationEleveGroupeComponent,
    SignUpComponent,
    LogInComponent,
    ReversedEmploisComponent,
    MenuComponent,
    MenusComponent,
    FomulaireDePaiementComponent,
    PaiementDesSalairesAComponent,
    PaiementDesSalairesBComponent,
    SituationDesPaiementsComponent,
    HpPresenceComponent,
    HpAbsenceComponent,
    HistoriquePresenceComponent,
    MainComponent,
    RightMenuComponent,
    TopMenuComponent,
    MiddleMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlobaVarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
