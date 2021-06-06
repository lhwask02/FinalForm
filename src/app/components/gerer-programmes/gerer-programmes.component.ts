import { Component, OnInit } from '@angular/core';
import { Programme } from 'src/app/models/Programme';
import Swal from 'sweetalert2';
import { Cour } from '../../models/Cour';

@Component({
  selector: 'app-gerer-programmes',
  templateUrl: './gerer-programmes.component.html',
  styleUrls: ['./gerer-programmes.component.css']
})
export class GererProgrammesComponent implements OnInit {
  IsCourAdded:boolean=false;
  listcoursapi: Cour[] = [];
  listcoursfilter: Cour[] = [];
  listcoursFinal: Cour[] = [];
  MatierRechrecher:string="";
  Prix:string="";
  CE:string="";
  constructor() { }
  
  ngOnInit(): void {
    this.listcoursapi=[
      {Matier:"Math",Enseignant:"Enseignant0"},
      {Matier:"SVT",Enseignant:"Enseignant2"},
      {Matier:"Physique",Enseignant:"Enseignant1"},
      {Matier:"Informatique",Enseignant:"Enseignant3"},
      {Matier:"Scienses de la vie et terre",Enseignant:"Enseignant4"}
    ];
    this.listcoursapi.forEach((cour)=>{this.listcoursfilter.push(cour)});

  }
  Intitule(e:any)
  {
    this.CE=e.target.value;
  }
  Tarif(e:any)
  {
    this.Prix=e.target.value;
  }
  Filter(e :any) {
   if(e.target.value != undefined)
   {
    this.listcoursfilter=this.listcoursapi;
    this.MatierRechrecher=e.target.value.toLowerCase().trim();
    this.listcoursfilter=
     this.listcoursapi.filter((cour)=>
      cour.Matier.substring(0,this.MatierRechrecher.length).toLowerCase()== this.MatierRechrecher);
   }
   else
   {
    this.listcoursfilter= this.listcoursapi;
     
   }
      //if(cour.Matier.toLowerCase().indexOf(filter.toLowerCase())>-1)
  }
  Ajouter(e :any)
  {
    if(!this.Exist( this.MatierRechrecher) &&this.MatierRechrecher.trim()!="" )
        {
          this.listcoursapi.push({Matier:this.MatierRechrecher,Enseignant:""}) ;
          this.Filter(e);
          // Swal.fire({
          //   position: 'center',
          //   icon: 'success',
          //   title: 'Matier Ajouter Avec Succes',
          //   showConfirmButton: false,
          //   timer: 1500
          // });
        }
     
  }
  Exist(CourRechrecher:String)
  {
    let isExist:Boolean=false;
    this.listcoursapi.map((cour)=>
    {
      if(cour.Matier.toLowerCase()==CourRechrecher.toLowerCase())
         isExist=true;
    });
    return isExist;
  }
  Enregistrer()
  {
    let progr:Programme={Intitule:this.CE,Tarif:parseFloat(this.Prix),Contenu:this.listcoursFinal};
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Prgramme Enregistree Avec Succes',
      showConfirmButton: false,
      timer: 1500
    });
  }
  Toggle(e:any)
  {
   if( e.target.style[0] !=undefined)
      e.target.style.backgroundColor = null; 
  else
      e.target.style.backgroundColor = 'green' ; 
  }
}
