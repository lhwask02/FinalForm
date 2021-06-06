import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/Groupe';
import { Programme } from 'src/app/models/Programme';
import { Salle } from 'src/app/models/Salle';

@Component({
  selector: 'app-gestion-salles',
  templateUrl: './gestion-salles.component.html',
  styleUrls: ['./gestion-salles.component.css']
})
export class GestionSallesComponent implements OnInit {

  ListSalleApi:Salle[]=[];
  ListSalle:Salle[]=[];
  Libelle:string="";
  Type:string="";
  
  constructor() { }
  ngOnInit(): void {
    this.ListSalleApi=[
      {
        Id:1,
        Libelle:"Libelle1",
        Type:"TYPE1"
      },
      {
        Id:2,
        Libelle:"Libelle2",
        Type:"TYPE2"
      },
      {
        Id:3,
        Libelle:"Libelle3",
        Type:"TYPE3"
      },
    ];
   
    this.ListSalleApi.forEach((salle)=>{
        this.ListSalle.push(salle);
    });
  }
  Ajouter()
  {
     this.ListSalle.push({Id:-this.ListSalle.length,Libelle:this.Libelle,Type:this.Type});
  }
  Supprimer(e:number)
  {
  this. ListSalle=   this. ListSalle.filter((sl)=>sl.Id!=e);
  }
  onkeyup(e:any)
  {
    if(e.target.placeholder=='Libelle')
      this.Libelle=e.target.value;
    else
      this.Type=e.target.value;
  }
   
}
