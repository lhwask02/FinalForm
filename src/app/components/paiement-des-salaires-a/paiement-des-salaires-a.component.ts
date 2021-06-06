import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-des-salaires-a',
  templateUrl: './paiement-des-salaires-a.component.html',
  styleUrls: ['./paiement-des-salaires-a.component.css']
})
export class PaiementDesSalairesAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeWin()
  {
    document.getElementById("paiemodal")!.style.display='none';
  }
}
