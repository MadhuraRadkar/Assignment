import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  FirstName:string="";
  LastName:string="";
  Email:string="";
  Password:string="";
  City:string="";

  getData(){
    debugger;
    console.log(this.FirstName+" "+this.LastName+" "+this.Email+" "+this.Password+" "+this.City)
  }

}
