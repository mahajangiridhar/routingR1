import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/model';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Iuser|undefined
  id:number=1
  constructor(private usersService:UsersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (myParams:Params)=>{
        this.id = +myParams['id']
        this.user = this.usersService.getSingleUser(this.id)
      }
    )
  }

}
