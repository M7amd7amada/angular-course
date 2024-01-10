import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  product = {
    name: 'IPhone 13',
    price: 999,
    inStock: 0,
    discountPercent: 8.5,
  };

  applyDiscount() {
    return (
      this.product.price -
      (this.product.price * this.product.discountPercent) / 100
    );
  }
}
