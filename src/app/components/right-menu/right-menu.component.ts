import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/Enseignant';
import { Groupe } from 'src/app/models/Groupe';
@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {
 
  constructor() { }
  ListDeFilter:any[]=[];
  ListElements:string[][]=[];
  ListElementsFilter:string[][]=[];
  active:boolean=false;
  Fullname :string="";
  Toggle()
  {
    this.active = !this.active
  }
  openNa() {
    if(window.innerWidth<1024)
  {

    document.getElementById("mySidena")!.style.width = "100%";
    // document.getElementById("mySidena")!.style.marginLeft = "40px";
  }
   else
    document.getElementById("mySidena")!.style.width = "40%";
    document.getElementById("mySidena")!.style.height = "100%";

 
  }
  Filter(e:any)
  {
    this.Fullname=e.target.value;
    this.Fullname=this.Fullname.trim().toLowerCase();
    this.ListElementsFilter= this.ListElements.filter((ele)=>(ele[1].toLocaleLowerCase()+" "+ele[2].toLocaleLowerCase()).indexOf(this.Fullname)>-1);
  }
  openNa2() {
    if(window.innerWidth<1024)
   {
    document.getElementById("mySidena2")!.style.width = "100%";
   }
   else
 {
  document.getElementById("mySidena2")!.style.width = "40%";
  document.getElementById("mySidena2")!.style.height = "50%";
 }
 
  }
  Badge()
  {
    if(window.innerWidth<1024)
    document.getElementById("rightlist2")!.style.width = "45%";
   else
    document.getElementById("rightlist2")!.style.width = "40%";
 
  }
    closeNa() {
    document.getElementById("mySidena")!.style.width = "0";
    document.body.style.backgroundColor = "white";
  }
  closeNa2() {
    document.getElementById("mySidena2")!.style.width = "0";
    document.body.style.backgroundColor = "white";
  }
  ListGroupeapi: Groupe[] = [];
  ListEnseignantapi: Enseignant[] = [];
  ngOnInit(): void {
 
    this.ListElements=[
      
      ["","Mohammadi ","ilyas"],
      ["","Samihi ","Reda"],
      ["","Mohammadi ","ilyas"],
      ["","Mohammadi ","ilyas"],
      ["","Mohammadi ","ilyas"],
    ];
    this.ListGroupeapi=[
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
   
    this.ListEnseignantapi=[{
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
    this.ListElementsFilter=this.ListElements;
  }
  openNav() {
    document.getElementById("mySidenav")!.style.width = "50%";
    document.getElementById("main")!.style.marginLeft = "25%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }
    closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  radio(e:any)
    {
        let val=e.target.id;
        console.log(e.target.id);
        document.getElementById('second')!.removeAttribute('hidden');
        if(val=="bmgroupe")
        this.ListDeFilter=this.ListGroupeapi.map((groupe)=>groupe.Programme.Intitule+groupe.Libelle);
        else if(val=="bmenseignant")
        this.ListDeFilter=this.ListEnseignantapi.map((enseignant)=>enseignant.Nom);
        else if(val=="bmassistant")
        {
          this.ListDeFilter=[];
        }
       else
       {
         document.getElementById('second')?.setAttribute('hidden','');
       }
        

    }
  
}
