import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/Groupe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historique-presence',
  templateUrl: './historique-presence.component.html',
  styleUrls: ['./historique-presence.component.css']
})
export class HistoriquePresenceComponent implements OnInit {

  constructor() { }
  listPresence:string[][]=[];
  listPresenceFiltrer:string[][]=[];
  listGroupapi:Groupe[]=[];
  Notifier()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Message Envoyes Avec Succes',
      showConfirmButton: false,
      timer: 1500
    });
  }
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
    this.listPresence=[
          [
            "",
            "Reda",
            "Samihi",
            "Après midi",
            "2021-05-24 13:35:00",
            "present(e)",
          ],
          [
            "",
            "Reda",
            "Samihi",
            "Après midi",
            "2021-05-24 13:35:00",
            "absent(e)",
          ],
          [
            "",
            "Reda",
            "Samihi",
            "Après midi",
            "2021-05-24 13:35:00",
            "present(e)",
          ],
          [
            "",
            "Reda",
            "Samihi",
            "Après midi",
            "2021-05-24 13:35:00",
            "present(e)",
          ]



    ];
    this.listPresenceFiltrer=this.listPresence;
  }
  Filter(e:any)
  {
    let f=e.target.value;
    console.log(f)
    if(f.toLowerCase().substring(0,1)=="t")
      this.listPresenceFiltrer=this.listPresence;
    else
      this.listPresenceFiltrer=this.listPresence.filter((lst)=>lst[5].toLowerCase().substring(0,1)==f.toLowerCase().substring(0,1));
  
  
    }
  
}

 
 