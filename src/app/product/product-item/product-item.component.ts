import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  onAddToOrder(){
    this.shoppingCartService.onAddToCart(this.product);
  }

}
