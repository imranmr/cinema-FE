import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AboutmovieComponent } from './components/aboutmovie/aboutmovie.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"aboutmovie",component:AboutmovieComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"mycart",component:MycartComponent,canActivate:[AuthGuard]},
  {path:"resetpassword",component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
