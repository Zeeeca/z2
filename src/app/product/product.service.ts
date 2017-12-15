import { OnInit, Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService implements OnInit {
    private products: Product[];

    constructor(){
        this.products = [
            new Product(0, 'Carbonara', 'https://placeimg.com/250/250/any', 25.5),
            new Product(1, 'Bolognese', 'https://placeimg.com/250/250/any', 12.95),
            new Product(2, 'Vegeteriana', 'https://placeimg.com/250/250/any', 13.2),
            new Product(3, 'Amatriciana', 'https://placeimg.com/250/250/any', 9.25),
            new Product(4, 'Night', 'https://placeimg.com/250/250/any', 9.50),
            new Product(5, 'Pollo e Pesto', 'https://placeimg.com/250/250/any', 11.50),
            new Product(6, 'Day', 'https://placeimg.com/250/250/any', 10),
            new Product(7, 'Green vista', 'https://placeimg.com/250/250/any', 8),
            new Product(8, 'Red hot chilly pasta', 'https://placeimg.com/250/250/any', 15)            
        ]
    }

    ngOnInit() {

    }

    getProducts(){
        return this.products;
    }


}