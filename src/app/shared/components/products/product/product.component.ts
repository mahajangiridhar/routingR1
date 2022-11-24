import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Iproduct|undefined
  id: number = 1
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe(
      (myParams:Params)=>{
        this.id = +myParams['id']
        this.product = this.productsService.getSingleProduct(this.id)
      }
     )
  }

}
