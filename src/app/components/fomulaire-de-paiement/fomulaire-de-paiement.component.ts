import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fomulaire-de-paiement',
  templateUrl: './fomulaire-de-paiement.component.html',
  styleUrls: ['./fomulaire-de-paiement.component.css']
})
export class FomulaireDePaiementComponent implements OnInit {

  constructor() { }
  Months:string[][]=[];
  Facture:string[][]=[];
  ngOnInit(): void {
    this.Facture=[
      ["1023","Scolarité","1500","11500","unpaid"],
      ["1023","Inscription","1500","11500","paid"],
      ["1023","Scolarité","1500","11500","unpaid"],
      ["1023","Scolarité","1500","11500","unpaid"],
  
    ];
    this.Months=[
      ["Janvier","paid"],
      ["Fevrier","paid"],
      ["Mars","paid"],
      ["Avril","paid"],
      ["Mai","paid"],
      ["Juin","paid"],
      ["July","paid"],
      ["Aout","half"],
      ["Septembre","paid"],
      ["Octobre","unpaid"],
      ["November","unpaid"],
      ["December","paid"],
    ];
  }
  Close(){
    document.getElementById( "pay")!.style.display = 'none' ; 
  }
}
