import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-menu',
  templateUrl: './middle-menu.component.html',
  styleUrls: ['./middle-menu.component.css']
})
export class MiddleMenuComponent implements OnInit {

  constructor() { }
  ListElements:string[][]=[];
  Listitem:string[][]=[];
  active:boolean=false;
  ngOnInit(): void {
    this.ListElements=[
      ["","Mohammadi ","ilyas"],
      ["","Samihi ","Reda"],
      ["","Mohammadi ","ilyas"],
      ["","Mohammadi ","ilyas"],
      ["","Mohammadi ","ilyas"],
    ];
    this.Listitem=[
      ["Mohammadi ilyas"],
      ["Samihi Reda"],
      ["Mohammadi ilyas"],
      ["Mohammadi ilyas"],
      ["Mohammadi ilyas"],
    ];
  }
  close()
  {
    document.getElementById('datespe1')!.style.display='none';
    document.body.style.backgroundColor = "rgba(250,250,250,0.5)";
  }
  Onchange()
  {
    this.active=!this.active;
    if(this.active)
    {
      document.getElementById('date')!.removeAttribute('disabled');
     document.getElementById('time')!.removeAttribute('disabled');
 
    }
    else
    {
      document.getElementById('date')!.setAttribute('disabled','');
    document.getElementById('time')!.setAttribute('disabled','');
    }
  }

}
