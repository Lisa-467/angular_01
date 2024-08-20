import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent implements OnInit {
  // array of object
  cartItems: any[] = [
    { name: 'Apples', quantity: 2 },
    { name: 'Bananas', quantity: 1 },
    { name: 'Milk', quantity: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
