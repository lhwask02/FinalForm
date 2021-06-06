import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
    this.ListElements=[
      
      ["","Mohammadi ","ilyas"],
      ["","Samihi ","Reda"],
      ["","Mohammadi ","ilyas"],
      ["","Mohammadi ","ilyas"],
      ["","Mohammadi ","ilyas"],
    ];
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

}
