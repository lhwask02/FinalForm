import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant';
import { Groupe } from 'src/app/models/Groupe';

@Component({
  selector: 'app-association-eleve-groupe',
  templateUrl: './association-eleve-groupe.component.html',
  styleUrls: ['./association-eleve-groupe.component.css']
})
export class AssociationEleveGroupeComponent implements OnInit {

  constructor() { }
  listGroupapi:Groupe[]=[];
  listGroup:Groupe[]=[];
  listEtudiantapi:Etudiant[]=[];
  listEtudiant:Etudiant[]=[];
  ngOnInit(): void {
    this.listGroupapi=[
      {Id :1, Libelle :"A", Programme:  {
        Intitule:"CE4",Tarif:1700,Contenu:[
          {Matier:"Math",Enseignant:"Enseignant0"},
          {Matier:"SVT",Enseignant:"Enseignant2"},
          {Matier:"Physique",Enseignant:"Enseignant0"},
          {Matier:"Informatique",Enseignant:"Enseignant3"},
          {Matier:"Scienses de la vie et terre",Enseignant:"Enseignant4"}
                                      ]
      },NumberEleve:10},
      {Id :2, Libelle :"C", Programme:  {
        Intitule:"CE5",Tarif:1500,Contenu:[
          {Matier:"Math",Enseignant:"Enseignant0"},
          {Matier:"SVT",Enseignant:"Enseignant2"},
          {Matier:"Physique",Enseignant:"Enseignant0"},
                                      ]
      },NumberEleve:20},
      {Id :3, Libelle :"B", Programme:  {
        Intitule:"CE3",Tarif:800,Contenu:[
          {Matier:"Math",Enseignant:"Enseignant0"},
          {Matier:"SVT",Enseignant:"Enseignant2"},
                                      ]
      },NumberEleve:30}
    ];
    this.listEtudiantapi=[
      {
      Id:1,
      Image:"",
      Nom:"Nom1",
      Prenom:"Prenom1",
      Sexe:"M",
      Groupe:"CE4A"
    },
    {
      Id:2,
      Image:"",
      Nom:"Nom2",
      Prenom:"Prenom2",
      Sexe:"M",
      Groupe:"CE4A"
    },
    {
      Id:3,
      Image:"",
      Nom:"Nom3",
      Prenom:"Prenom3",
      Sexe:"M",
      Groupe:"CE3B"
    },
    {
      Id:4,
      Image:"",
      Nom:"Nom4",
      Prenom:"Prenom4",
      Sexe:"M",
      Groupe:"CE3B"
    },
  ];
    this.listGroupapi.forEach((groupe)=>{
        this.listGroup.push(groupe);
    });
    this.listEtudiantapi.forEach((etudiant)=>{
      this.listEtudiant.push(etudiant);
  });
  }

}
