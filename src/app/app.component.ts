import { Component } from '@angular/core';
import {Router} from "@angular/router";

import { AuthenticationService } from './services/authentication.service';
import {User} from "./_models/user";
import { Role } from './_models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user!: User;
  constructor(private authentitication : AuthenticationService){

    this.authentitication.user.subscribe(x=> this.user =x)

  }

  get isAdmin(){
    return this.user && this.user.role === Role.Admin;
  }

  get isUser(){
    return this.user && this.user.role === Role.User;
  }

  logout(){
    this.authentitication.logout();
  }

  title = 'adminLogin';
}
