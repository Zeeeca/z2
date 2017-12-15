import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Product } from '../product.model';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  activeCategory: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

    this.activeCategory = 'pastas';

    this.categories = [
      new Category('pastas', [
        new Product(0, 'Carbonara', 'https://placeimg.com/250/250/any', 25.5),
        new Product(1, 'Bolognese', 'https://placeimg.com/250/250/any', 12.95),
        new Product(2, 'Vegeteriana', 'https://placeimg.com/250/250/any', 13.2),
        new Product(3, 'Amatriciana', 'https://placeimg.com/250/250/any', 9.25),
        new Product(4, 'Night', 'https://placeimg.com/250/250/any', 9.50),
        new Product(5, 'Pollo e Pesto', 'https://placeimg.com/250/250/any', 11.50),
        new Product(6, 'Day', 'https://placeimg.com/250/250/any', 10),
        new Product(7, 'Green vista', 'https://placeimg.com/250/250/any', 8),
        new Product(8, 'Red hot chilly pasta', 'https://placeimg.com/250/250/any', 15)  
      ]),
      new Category('pizzas', [
        new Product(9, 'Carbonara', 'http://via.placeholder.com/250x250', 25.5),
        new Product(10, 'Bolognese', 'http://via.placeholder.com/250x250', 12.95),
        new Product(11, 'Vegeteriana', 'http://via.placeholder.com/250x250', 13.2),
        new Product(12, 'Amatriciana', 'http://via.placeholder.com/250x250', 9.25),
        new Product(13, 'Night', 'http://via.placeholder.com/250x250', 9.50),
        new Product(14, 'Pollo e Pesto', 'http://via.placeholder.com/250x250', 11.50),
        new Product(15, 'Day', 'http://via.placeholder.com/250x250', 10),
        new Product(16, 'Green vista', 'http://via.placeholder.com/250x250', 8),
        new Product(17, 'Red hot chilly pasta', 'http://via.placeholder.com/250x250', 15)  
      ]),
      new Category('sandwitches', [
        new Product(18, 'Carbonara', 'https://placebear.com/g/250/250', 25.5),
        new Product(19, 'Bolognese', 'https://placebear.com/g/250/250', 12.95),
        new Product(20, 'Vegeteriana', 'https://placebear.com/g/250/250', 13.2),
        new Product(21, 'Amatriciana', 'https://placebear.com/g/250/250', 9.25),
        new Product(22, 'Night', 'https://placebear.com/g/250/250', 9.50),
        new Product(23, 'Pollo e Pesto', 'https://placebear.com/g/250/250', 11.50),
        new Product(24, 'Day', 'https://placebear.com/g/250/250', 10),
        new Product(25, 'Green vista', 'https://placebear.com/g/250/250', 8),
        new Product(26, 'Red hot chilly pasta', 'https://placebear.com/g/250/250', 15)  
      ]),

    ]
    this.getProductsInCategory();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => { 
        this.activeCategory = params['categoryName'];
      }
    )
  }

  getProductsInCategory(){   
    return this.categories.find(x => x.name == this.activeCategory).products;
  }

}
