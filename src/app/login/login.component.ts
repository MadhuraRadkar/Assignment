import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Email:string="";
  Password:string="";
  getData(){
    debugger;
    console.log(this.Email+" "+this.Password)
  }

}
