import { Product } from "../product/product.model";

export class ShoppingCartItem {
    product: Product;
    quantity: number;
    constructor(product: Product, quantity?: number){
        this.product = product;
        this.quantity = quantity? quantity : 1;
    }
}