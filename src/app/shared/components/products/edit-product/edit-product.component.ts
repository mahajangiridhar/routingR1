import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Iproduct|undefined
  id: number=1
  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (myParams:Params)=>{
        this.id = +myParams['id']
        this.product = this.productsService.getSingleProduct(this.id)
      }
    )
  }
  gotoUsers(){
    this.router.navigate(['users'])
    // this.router.navigate(['users'], {relativeTo: this.route})
  }
}
