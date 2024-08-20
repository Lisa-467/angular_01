import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private _productService: ProductService,
    private _cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this._cartService.addToCart(product);
  }
}
