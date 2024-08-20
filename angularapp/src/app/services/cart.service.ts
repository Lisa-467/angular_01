import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductComponent } from '../product/product.component';
import { Product } from '../models/product';

// Make sure this path is correct

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: ProductComponent) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, product]);
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart.value.filter(
      (product) => product.id !== productId
    );
    this.cart.next(currentCart);
  }

  clearCart() {
    this.cart.next([]);
  }
}
