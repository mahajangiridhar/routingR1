import { Injectable } from '@angular/core';
import { Iuser } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr:Iuser[]=[
    {
      name:'Nagesh',
      id:1
    },
    {
      name:'Vaibhav',
      id:2
    },
    {
      name:'Sadashiv',
      id:3
    }
  ]

  constructor() { }
  getAllUsers():Iuser[]{
    return this.usersArr
  }
  getSingleUser(id:number):Iuser|undefined{
    return this.usersArr.find(ele=> ele.id === id)
  }
}
