import { Injectable } from '@angular/core';
import { Iproduct } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArr:Iproduct[]=[
    {
      Pname:'Samsung',
      Pid:1,
      Pstatus:'In Progress',
      CanEdit:1
    },
    {
      Pname:'Samsung 31V',
      Pid:2,
      Pstatus:'Dispatched',
      CanEdit:1
    },
    {
      Pname:'Iphone OnePlus',
      Pid:3,
      Pstatus:'Delivered',
      CanEdit:0
    }
  ]

  constructor() { }
  getAllProducts(){
    return this.productArr
  }
  getSingleProduct(id:number){
    return this.productArr.find(ele=> ele.Pid === id)
  }
}
