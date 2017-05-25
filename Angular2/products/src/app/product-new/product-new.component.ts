import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "app/product";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  products: Product[];
  new_product: Product = new Product;

  @Output() product = new EventEmitter
         

  constructor() { }

  ngOnInit() {
  
  }

  create_product(): void {
    
    this.product.emit(this.new_product)
    this.new_product = new Product
  }

}
