import { Component, OnInit, Input } from '@angular/core';
import { Product } from "app/product";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() new_product: Product;  
            products: Product[];
          

  constructor() { }

  ngOnInit() {
    this.products = [
      {name: "Mouse", description:"Consair", price:"60.00", quantity:"1", date: new Date}
    ]
  }

  add_product(new_product){
    new_product.date = new Date();
    this.products.push(new_product)

  }
  delete(product){
    let index = this.products.indexOf(product)

    if(index > -1){
      this.products.splice(index, 1)
    }
  }

}
