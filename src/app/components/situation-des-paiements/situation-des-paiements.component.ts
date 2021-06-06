import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/Groupe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-situation-des-paiements',
  templateUrl: './situation-des-paiements.component.html',
  styleUrls: ['./situation-des-paiements.component.css']
})
export class SituationDesPaiementsComponent implements OnInit {

  constructor() { }
  Payments:string[][]=[];
  listGroupapi:Groupe[]=[];
  ngOnInit(): void {
    this.Payments=[
          ["Scolarité","Idrissi","Imane","27000","25000","24/05/2021"," 2000","selectedPaiement"],
          ["Scolarité","Idrissi","Imane","27000","25000","24/05/2021"," 2000","selectedPaiement"],
          ["Scolarité","Idrissi","Imane","27000","25000","24/05/2021"," 2000","selectedPaiement"],
          ["Scolarité","Idrissi","Imane","27000","25000","24/05/2021"," 2000",""]
 
    ];
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
  }
  Paid(i:number){
  if( this.Payments[i][7] != "")
      this.Payments[i][7] =""
  else
      this.Payments[i][7] ="selectedPaiement"
 
  }
  informer()
  {
    this.Payments.forEach((pay)=>{
  if( pay[7] == "")
     { 
        
      }
 
    });
    Swal.fire(
     { position: 'top-right',
     icon: 'success',
     title: 'Informer Avec Succes',
     showConfirmButton: false,
     timer: 1500}
    );
  }
  closeWin()
  {
    document.getElementById("paiemodal")!.style.display='none';
  }
}
