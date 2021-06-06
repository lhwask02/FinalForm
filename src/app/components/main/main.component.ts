import { Component, OnInit } from '@angular/core';
import { GlobaVarService } from 'src/app/globa-var.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //constructor( ) { }
   constructor(private _var :GlobaVarService) { }

  ngOnInit(): void {
  } 
  getMainDataNow()
  {
    this._var.getMainData().subscribe((res)=>{console.log(res)});
  }
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
}
