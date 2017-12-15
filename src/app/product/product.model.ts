import { Price } from "../shared/price.model";

export class Product {
    id: number;
    name: string;
    image: string;
    price: Price;

    constructor(id: number, name: string, image: string, amount: number, currency?: string, salePrice?: number, isOnSale?: boolean){
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = new Price(amount, currency, salePrice, isOnSale);
    }
}