import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() products: Product[];

  // constructor(private productService: ProductService) {
  //   this.products = productService.getProducts();
  //  }

  ngOnInit() {
    
  }

}
