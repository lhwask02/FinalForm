import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/Groupe';
import { Programme } from '../../models/Programme';

@Component({
  selector: 'app-ajouter-groupe',
  templateUrl: './ajouter-groupe.component.html',
  styleUrls: ['./ajouter-groupe.component.css']
})
export class AjouterGroupeComponent implements OnInit {

  ListProgramme:Programme[]=[];
  listGroupapi:Groupe[]=[];
  listGroup:Groupe[]=[];
  lst:Groupe[]=[];
  libelle: string="";
  Id:number=0;
  constructor() { }
  ngOnInit(): void {
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
    this.listGroupapi.forEach((groupe)=>{
        this.listGroup.push(groupe);
    });
  }
  Ajouter()
  {
    if(this.libelle.trim()!="")
    {
     let programmes:Programme[]=[];
     let str=document.querySelector('select')!.selectedOptions[0].text;

     this.ListProgramme.forEach((pro)=>{
                                        if(pro.Intitule==str)
                                        programmes.push( pro);
                                      });
     this.listGroup.push(  {Id :-1*this. listGroup.length, Libelle :this.libelle.toUpperCase(), Programme: programmes[0],NumberEleve:0});
     console.log(   this.listGroup);
  
     }
  }
  Supprimer(e:any)
  {

    this. listGroup=   this. listGroup.filter((gr)=>gr.Id!=e.target.id);

  }
  onkeyup(event:any)
  {
    this.libelle=event.target.value;
  }
}
