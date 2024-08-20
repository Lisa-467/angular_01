import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-addtocart2',
  templateUrl: './addtocart2.component.html',
  styleUrls: ['./addtocart2.component.css'],
})
export class Addtocart2Component implements OnInit {
  cart: any[] = [];

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(productId: number) {
    this._cartService.removeFromCart(productId);
  }

  clearCart() {
    this._cartService.clearCart();
  }
}
