import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/model';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Iuser[]=[]
  activeId: number = 1;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers()
  }

}
