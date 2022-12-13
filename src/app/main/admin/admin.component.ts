import { Component, OnInit, Inject } from '@angular/core';
import {first} from "rxjs/operators";

import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loading = false;
  users: User[] =[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.loading= true;
    this.userService.getAll().pipe(first()).subscribe(user => {
      this.loading = false;
      this.users = user;
    })
  }

}
