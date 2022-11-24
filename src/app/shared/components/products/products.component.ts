import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../model/model';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Iproduct[]=[]
  activeId:number=1
  constructor(private productsService:ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts()
  }

}
