import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/Enseignant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-enseignant',
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.css']
})
export class ListEnseignantComponent implements OnInit {
 
  Nom:string="";
  Matricule:string="";
  N_Tel:string="";
  Email:string="";

 
  listEnseignantapi: Enseignant[] = [  

];
  listEnseignantfilter: Enseignant[] = [];
  constructor() { }

  ngOnInit(): void {
  this.listEnseignantapi=[{
  Matricule:1,
  Nom:"Karami",
  Prenom:"Ens",
  N_Tel:"06123456",
  Email:"Ens1@gmail.com",
  Salaire_de_Base:3000,
  Imgsrc:""},
  {
  Matricule:2,
  Nom:"Kamali",
  Prenom:"Ens",
  N_Tel:"06123654",
  Email:"Ens2@gmail.com",
  Salaire_de_Base:4000,
  Imgsrc:""},
  {
  Matricule:3,
  Nom:"Ksimi",
  Prenom:"Ens",
  N_Tel:"0612987",
  Email:"Ens3@gmail.com",
  Salaire_de_Base:5000,
  Imgsrc:""}];
  this.listEnseignantapi.forEach((enseignant)=>this.listEnseignantfilter.push(enseignant));
  }
  Affichier(Matricule:number)
  {
    let str:string="";
    let imgSrc:string="";
    this.listEnseignantfilter.forEach((ens)=>{
      if(ens.Matricule.toString().toLowerCase()==Matricule.toString().toLowerCase())
      {
         str ="Matricule : "+ens.Matricule + "<br/>Nom : "+ens.Nom
         +"<br/> Prenom : "+ens.Prenom + "<br/>N_Tel : "+ens.N_Tel
         +"<br/>Email : "+ens.Email + "<br/>Salaire_de_Base : "+ens.Salaire_de_Base;
         imgSrc=ens.Imgsrc;
         
      }
    });
    Swal.fire({
      title: 'Enseignat Information',
      html: str,
      imageUrl: imgSrc,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }

  Supprimer(Matricule:number)
  {
  this.listEnseignantfilter = this.listEnseignantfilter.filter((Enseignant)=>Enseignant.Matricule.toString().toLowerCase() != Matricule.toString().toLowerCase());
  }
  UpdateFilters(e:any)
  {
  if(e.target.placeholder=="Nom")
  {  this.Nom=e.target.value.trim().toLowerCase(); }
  else if(e.target.placeholder=="Matricule")
{    this.Matricule=e.target.value.trim().toLowerCase(); }
  else if(e.target.placeholder=="N° Tel")
    {this.N_Tel=e.target.value.trim().toLowerCase(); }
  else  
 {   this.Email=e.target.value.trim().toLowerCase();}
  }
  Filter() {

   this.listEnseignantfilter =  this.listEnseignantapi;
   if(this.Nom.trim()!="")
    this.listEnseignantfilter =  this.listEnseignantfilter.filter((Enseignant)=>Enseignant.Nom.substring(0,this.Nom.length).toLowerCase()==this.Nom );

   if(this.Matricule.trim()!="")
  this.listEnseignantfilter =   this.listEnseignantfilter.filter((Enseignant)=>Enseignant.Matricule.toString().substring(0,this.Matricule.length).toLowerCase() == this.Matricule);

   if(this.N_Tel.trim()!="")
  this.listEnseignantfilter =  this.listEnseignantfilter.filter((Enseignant)=>Enseignant.N_Tel.substring(0,this.N_Tel.length).toLowerCase()==this.N_Tel);

  if(this.Email.trim()!="")
  this.listEnseignantfilter =  this.listEnseignantfilter.filter((Enseignant)=>Enseignant.Email.substring(0,this.Email.length).toLowerCase()==this.Email);

    
  }
}
