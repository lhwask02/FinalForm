import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-des-salaires-b',
  templateUrl: './paiement-des-salaires-b.component.html',
  styleUrls: ['./paiement-des-salaires-b.component.css']
})
export class PaiementDesSalairesBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeWin()
  {
    document.getElementById("paiemodal")!.style.display='none';
  }
}
