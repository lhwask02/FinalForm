import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEnseignantComponent } from './components/ajouter-enseignant/ajouter-enseignant.component';
import { AjouterGroupeComponent } from './components/ajouter-groupe/ajouter-groupe.component';
import { GererEmploiComponent } from './components/gerer-emploi/gerer-emploi.component';
import { GererProgrammesComponent } from './components/gerer-programmes/gerer-programmes.component';
import { ListEnseignantComponent } from './components/list-enseignant/list-enseignant.component';
import { ListGroupeComponent } from './components/list-groupe/list-groupe.component';
import { ListProgrammeComponent } from './components/list-programme/list-programme.component';
import { SchoolInfoComponent } from './components/school-info/school-info.component';
import { GestionSallesComponent } from './components/gestion-salles/gestion-salles.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AssociationEleveGroupeComponent } from './components/association-eleve-groupe/association-eleve-groupe.component';
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
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

const routes: Routes = [
  {path:"",component:SchoolInfoComponent},
  {path:"LeftMenuComponent",component:LeftMenuComponent},
  {path:"MainComponent",component:MainComponent},
  {path:"RightMenuComponent",component:RightMenuComponent},
  {path:"TopMenuComponent",component:TopMenuComponent},
  {path:"MenuComponent",component:MenuComponent},
  {path:"MenusComponent",component:MenusComponent},
  {path:"FomulaireDePaiementComponent",component:FomulaireDePaiementComponent},
  {path:"PaiementDesSalairesAComponent",component:PaiementDesSalairesAComponent},
  {path:"PaiementDesSalairesBComponent",component:PaiementDesSalairesBComponent},
  {path:"SituationDesPaiementsComponent",component:SituationDesPaiementsComponent},
  {path:"HistoriquePresenceComponent",component:HistoriquePresenceComponent},
  {path:"HpPresenceComponent",component:HpPresenceComponent},
  {path:"HpAbsenceComponent",component:HpAbsenceComponent},
  {path:"SchoolInfoComponent",component:SchoolInfoComponent},
  {path:"SignUpComponent",component:SignUpComponent},
  {path:"LogInComponent",component:LogInComponent},
  {path:"AjouterEnseignantComponent",component:AjouterEnseignantComponent},
  {path:"AjouterGroupeComponent",component:AjouterGroupeComponent},
  {path:"GererEmploiComponent",component:GererEmploiComponent},
  {path:"GererProgrammesComponent",component:GererProgrammesComponent},
  {path:"ListEnseignantComponent",component:ListEnseignantComponent},
  {path:"ListProgrammeComponent",component:ListProgrammeComponent},
  {path:"ListGroupeComponent",component:ListGroupeComponent},
  {path:"GestionSallesComponent",component:GestionSallesComponent},
  {path:"AssociationEleveGroupeComponent",component:AssociationEleveGroupeComponent},
  {path:"ReversedEmploisComponent",component:ReversedEmploisComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
