import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Products=[
    {id:1,name:"Tv",price:25000},  // emp object
    {id:2,name:"Laptop",price:45000},
    {id:3,name:"Pendrive",price:700},
    {id:4,name:"Mouse",price:500},
  ];

}
