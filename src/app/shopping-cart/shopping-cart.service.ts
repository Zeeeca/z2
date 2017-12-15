import { OnInit, Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { Subject } from 'rxjs/Subject';
import { ShoppingCartItem } from './shopping-cart.model';

@Injectable()
export class ShoppingCartService implements OnInit {
    shoppingCart: ShoppingCartItem[];
    total: number;
    totalUpdateNotifier: Subject<number>;

    constructor(){
        this.shoppingCart = [];
        this.total = 0;
        this.totalUpdateNotifier = new Subject<number>();
    }

    ngOnInit() {

    }

    getCart(){
        return this.shoppingCart;
    }

    onAddToCart(product: Product){
        let cartItem = this.shoppingCart.find(x => x.product == product);
        if(cartItem){
            this.shoppingCart[this.shoppingCart.indexOf(cartItem)].quantity += 1;
        }
        else{
            this.shoppingCart.push(new ShoppingCartItem(product));
        }
        // console.log('Previous total: ' + this.cartTotal + ' , current amount: ' + product.price.amount + ' current total: ' + (this.cartTotal + product.price.amount));
        this.cartTotal += product.price.amount;        
        this.updateTotal();
    }

    onRemoveFromCart(i: number){
        this.cartTotal -= this.shoppingCart[i].product.price.amount;
        this.updateTotal();
        this.shoppingCart.splice(i, 1);
    }

    onIncrementQuantity(i: number){
        this.cartTotal += this.shoppingCart[i].product.price.amount;
        this.updateTotal();
        this.shoppingCart[i].quantity += 1;
    }

    onDecrementQuantity(i: number){
        if(this.shoppingCart[i].quantity > 1){
            this.shoppingCart[i].quantity -= 1;
            this.cartTotal -= this.shoppingCart[i].product.price.amount;
            this.updateTotal();
        }
    }

    updateTotal(){
        this.totalUpdateNotifier.next(this.cartTotal);
    }

    get cartTotal(){
        return this.total;
    }

    set cartTotal(total: number){
        this.total = total;
    }

    

}