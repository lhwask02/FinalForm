import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }
  menu:boolean=false;
  ngOnInit(): void {
  }
  openNav() {
    if(window.innerWidth<1024)
  {
    document.getElementById("mySidenav")!.style.width = "100%";
  }
   else
{
  document.getElementById("mySidenav")!.style.width = "30%";
  // document.body.style.marginLeft = "35%";

}

    // document.getElementById("main")!.style.marginLeft = "25%";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }
  Toggle()
  {
  
  }
    closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    // document.getElementById("main")!.style.marginLeft = "0";
   document.body.style.backgroundColor = "white";
  }
}
