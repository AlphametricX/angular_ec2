import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helper/auth.guard';
import { HomeComponent } from './main/home/home.component';
import { AdminComponent } from './main/admin/admin.component';
import { Role } from './_models/role';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './main/user/user.component';

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'admin', component: AdminComponent, canActivate:[AuthGuard],data:{roles: [Role.Admin]}},
  {path:'login', component: LoginComponent},
  {path:'user', component: UserComponent, canActivate:[AuthGuard], data :{roles:[Role.User,,Role.SubAdmins,Role.User]}},

  // Otherwise redirect to home.
  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
