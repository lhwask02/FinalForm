import { Component ,OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/Enseignant';
import { Groupe } from 'src/app/models/Groupe';
import { Programme } from 'src/app/models/Programme';
import { Salle } from 'src/app/models/Salle';
import { Seance } from 'src/app/models/Seance';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-gerer-emploi',
 templateUrl: './gerer-emploi.component.html',
 styleUrls: ['./gerer-emploi.component.css']
})
export class GererEmploiComponent implements OnInit {

 constructor() { }

 idSeanceOnhover:number=0;
 ListDeFilter: any[] = [];
 ListGroupeapi: Groupe[] = [];
 ListSalleApi: Salle[] = [];
 ListEnseignantapi: Enseignant[] = [];
 ListProgramme:Programme[]=[];
 empl: number[] = [];
 days: string[] = [];
 seance:Seance[]=[];
 seanceFiltrer:Seance[]=[];
 time:number[]=[];
 time2:number[]=[];
 fusion:boolean=false;
 firstClick:boolean=false;
 idfirstClick:string="";
 secondClick:boolean=false;
 idsecondClick:string="";
 tbody:any; tr:any; td:any;
 ngOnInit(): void {
 this.days=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi", "Dimanche",
 ];
 this.empl=[8,0,9,0,    10,0,11,0     ,12,0,13,0,  14,0,15,0,    16,0,17,0     ,18,0,19,0
  ];
  this.time=[8,9,10,11,12,13,14,15,16,17,18,19];
  this.time2=[8,9,10,11,12,13,14,15,16,17,18,19];
  this.seance=[ 
   {
    id:"1",
    Date:new Date('2021-05-31'),
    HeurDebut:"8",
    Duree:3.5,
    Matier:"Math",
    Enseignant:"Enseignant_Math",
    Salle:"Salle_Math",
    Group: "CE7A"
   },
   {
    id:"2",
    Date:new Date('2021-05-31'),
    HeurDebut:"12",
    Duree:3,
    Matier:"Info",
    Enseignant:"Enseignant_Info",
    Salle:"Salle_Info",
    Group: "CE3B"
   },
   {
    id:"3",
    Date:new Date('2021-05-31'),
    HeurDebut:"18",
    Duree:2,
    Matier:"SVT",
    Enseignant:"Enseignant_SVT",
    Salle:"Salle_SVT",
    Group: "CE4A"
   },
   {
    id:"4",
    Date:new Date('2021-05-31'),
    HeurDebut:"15",
    Duree:3,
    Matier:"Physique",
    Enseignant:"Enseignant_Physique",
    Salle:"Salle_Physique",
    Group: "CE4A"
   }

 ];
 this.ListProgramme=[
    {
      Intitule:"CE7",
      Tarif:1700,
      Contenu:[    
                {Matier:"Math",Enseignant:"Enseignant1"},
                {Matier:"SVT",Enseignant:"Enseignant2"},
                {Matier:"Physique",Enseignant:"Enseignant1"},
              ]
    },
    {
      Intitule:"CE3",
      Tarif:800,
      Contenu:[    
                {Matier:"Informatique",Enseignant:"Enseignant3"},
                {Matier:"Scienses de la vie et terre",Enseignant:"Enseignant4"}
              ]
    },
    {
      Intitule:"CE5",
      Tarif:3000,
      Contenu:[    
                {Matier:"Math",Enseignant:"Enseignant1"},
                {Matier:"SVT",Enseignant:"Enseignant2"},
                {Matier:"Physique",Enseignant:"Enseignant1"},
                {Matier:"Informatique",Enseignant:"Enseignant3"},
                {Matier:"Scienses de la vie et terre",Enseignant:"Enseignant4"}
              ]
    }


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
// setTimeout(()=>this.rowFusion(),10);
this.RemplirEmploi();
this.ListDeFilter=this.ListGroupeapi.map((groupe)=>groupe.Programme.Intitule+groupe.Libelle);
}
Enregistrer()
{
    document.getElementById( "InfoSeance")!.style.display = 'block' ;
    document.getElementById( "InfoSeance")!.style.display = 'visible' ; 
    document.getElementById( "edit")!.style.display = 'none' ; 
}
EditSeance()
{
    // document.getElementById( "edit")!.style.display = 'block' ;
    // document.getElementById( "edit")!.style.display = 'visible' ; 
    // document.getElementById( "InfoSeance")!.style.display = 'none' ; 
    document.getElementById( "emploimodal")!.style.display = 'block' ;
    document.getElementById( "emploimodal")!.style.display = 'visible' ; 
}
closeWin()
{
  document.getElementById( "emploimodal")!.style.display = 'none' ;
}
Supprimer()
{}
onmouseout(id:number)
{
    //document.getElementById( "InfoSeance")!.style.visibility = 'hidden' ; 
   // document.getElementById( "InfoSeance")!.style.display = 'none' ; 
}
onmouseover(id:number)
{
    document.getElementById( "InfoSeance")!.style.display = 'block' ;
    document.getElementById( "InfoSeance")!.style.display = 'visible' ;
    this.idSeanceOnhover=id; 
    document.getElementById( "edit")!.style.display = 'none' ; 
    document.getElementById( "InfoSeance")!.style.display = 'block' ;
    document.getElementById( "InfoSeance")!.style.display = 'visible' ; 
}
 rowFusion()
 {
     if(!this.fusion)
     {
        let tr=document.querySelectorAll("td[class]");
        for(let i=0;i<tr.length;i++)
        {
                   tr[i].setAttribute("rowspan", "2");
        }
        this.fusion=true;
     }
    }
 divclicked(id:any)
{
   if( !this.firstClick && !this.secondClick)
       { 
           this. idfirstClick=id;
           this.firstClick=true;
           document.getElementById( this. idfirstClick)!.style.backgroundColor = 'green' ; 
       }
  else if( (this.firstClick && !this.secondClick)) 
           {
               this. idsecondClick=id;
               let col1= document.getElementById(this.idfirstClick)!.getAttribute("colspan");
               let col2= document.getElementById(this.idsecondClick)!.getAttribute("colspan");
                  //verifier que les td ne sont pas le meme td
              if(this.idfirstClick !=this.idsecondClick)
              {
                  //verifier que les td dans le meme  row
               if(parseInt(this.idfirstClick) % 10 == parseInt(this.idsecondClick) % 10)
               {
                  if(parseInt(this.idsecondClick)>parseInt( this.idfirstClick) )
                 {
                   //nombre de td entre le 1er click et la 2em
                        let x= ((parseInt(this.idsecondClick)-parseInt( this.idfirstClick) )/10 )+1;
                        if (col2!=null)
                             document.getElementById(this.idfirstClick)?.setAttribute("colspan",(parseInt(col2)+x-1).toString());
                        else
                            document.getElementById(this.idfirstClick)?.setAttribute("colspan",(x).toString());
                        for (let index = parseInt(this.idfirstClick)+10; index <= parseInt(this.idsecondClick); index=index+10) 
                        document.getElementById( index.toString())!.style.display = 'none' ; 
                 }
                 else
                 {
                    this.ReverseClick(this.idfirstClick,this.idsecondClick);
                 }
               }
               else if(col1==null)
              {
                document.getElementById( this. idfirstClick)!.style.backgroundColor = 'grey' ; 
               }
               else if(col2==null)
               {
                 document.getElementById( this. idsecondClick   )!.style.backgroundColor = 'grey' ; 
                }
              }
              else if(col1==null)
                  document.getElementById( this. idfirstClick)!.style.backgroundColor = 'grey' ; 

               this. idfirstClick="";
               this. idsecondClick="";
               this.firstClick=false;
               
           }
}
 ReverseClick(idfirstClick: string, idsecondClick: string) {
           console.log(idfirstClick+" : "+ idsecondClick);
           //nombre de td entre le 1er click et la 2em
           let x= ((parseInt(this.idfirstClick )-parseInt( this.idsecondClick) )/10 )+1;
           let col2= document.getElementById(this.idfirstClick)!.getAttribute("colspan");
           if (col2!=null)
                document.getElementById(this.idsecondClick)?.setAttribute("colspan",(parseInt(col2)+x-1).toString());
           else
               document.getElementById(this.idsecondClick)?.setAttribute("colspan",(x).toString());
           for (let index = parseInt(this.idsecondClick)+10; index <= parseInt(this.idfirstClick); index=index+10) 
           document.getElementById( index.toString())!.style.display = 'none' ; 
}
 onChange(e:any)
 {
    if(e.target.value=="Groupe")
    this.ListDeFilter=this.ListGroupeapi.map((groupe)=>groupe.Programme.Intitule+groupe.Libelle);
    else if(e.target.value=="Salle")
        this.ListDeFilter=this.ListSalleApi.map((salle)=>salle.Libelle);
    else if(e.target.value=="Enseignant")
        this.ListDeFilter=this.ListEnseignantapi.map((enseignant)=>enseignant.Nom);
    else if(e.target.value=="Jour")
        this.ListDeFilter=this.days;
 }
 CloseInfo()
 {
  document.getElementById( "InfoSeance")!.style.display = 'none' ; 
 }
 RemplirEmploi()
 {
  document.getElementById( "emploimodal")!.style.display = 'none' ;
   let tbl=document.getElementById('table1');
  this.seanceFiltrer=   this.seance.filter((scn)=>{scn.Group=="CE4A"});
  this.seanceFiltrer.forEach((scn)=>{
    let id=scn. Date?.getDay();
  });
 }
 
}
