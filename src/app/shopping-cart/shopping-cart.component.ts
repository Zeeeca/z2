import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItem } from './shopping-cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  cartItems: ShoppingCartItem[];
  showDropdown: boolean = false;
  totalAmount: number;  
  
  constructor(private shoppingCartService: ShoppingCartService) {
    
    this.cartItems = shoppingCartService.getCart();

    shoppingCartService.totalUpdateNotifier.subscribe( (total:number) =>  {this.totalAmount = total;} );
}

  ngOnInit() {
  }

  onDropdownClicked() {
    this.showDropdown = !this.showDropdown;
  }

  removeFromCart(i: number){
    this.shoppingCartService.onRemoveFromCart(i);
  }

  incrementQuantity(i: number){
    this.shoppingCartService.onIncrementQuantity(i);
  }

  decrementQuantity(i: number){
    this.shoppingCartService.onDecrementQuantity(i);
  }

  get cartTotal(){
    return this.shoppingCartService.cartTotal;
  }

  set cartTotal(total: number){
    this.shoppingCartService.cartTotal = total;
  }

}
