import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/Enseignant';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})
export class AjouterEnseignantComponent implements OnInit {

  constructor() { }

  ShowInfo()
  {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }

  ngOnInit(): void {

  }
  Ajouter()
  {
    let info= document.querySelectorAll('.form-control');
    //validation 
    //img src
    //send to db
    let enseignant:Enseignant=new Enseignant(-1,info[0].innerHTML,info[1].innerHTML,info[2].innerHTML,info[3].innerHTML,
      parseFloat( info[4].innerHTML),info[5].innerHTML);

  }

}
