import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddgenreComponent } from './components/addgenre/addgenre.component';
import { UpdategenreComponent } from './components/updategenre/updategenre.component';
import { UpdatemovietimeComponent } from './components/updatemovietime/updatemovietime.component';
import { UpdatemovieComponent } from './components/updatemovie/updatemovie.component';
import { AddtimingComponent } from './components/addtiming/addtiming.component';
import { ConfirmationpageComponent } from './components/confirmationpage/confirmationpage.component';
import { OrderpageComponent } from './components/orderpage/orderpage.component';
import { PickseatsComponent } from './components/pickseats/pickseats.component';
import { MovietimesComponent } from './components/movietimes/movietimes.component';
import { LocationComponent } from './components/location/location.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AboutmovieComponent } from './components/aboutmovie/aboutmovie.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';


const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"aboutmovie",component:AboutmovieComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"mycart",component:MycartComponent,canActivate:[AuthGuard]},
  {path:"resetpassword",component:ResetpasswordComponent,canActivate:[AuthGuard]},
  {path:"location",component:LocationComponent},
  {path:"movietimes",component:MovietimesComponent},
  {path:"seats",component:PickseatsComponent},
  {path:"orderpage",component:OrderpageComponent,canActivate:[AuthGuard]},
  {path:"confirmationpage",component:ConfirmationpageComponent,canActivate:[AuthGuard]},
  {path:"addtiming",component:AddtimingComponent,canActivate:[AuthGuard]},
  {path:"updatemovie",component:UpdatemovieComponent,canActivate:[AuthGuard]},
  {path:"updatemovietime",component:UpdatemovietimeComponent,canActivate:[AuthGuard]},
  {path:"updategenre",component:UpdategenreComponent,canActivate:[AuthGuard]},
  {path:"addgenre",component:AddgenreComponent,canActivate:[AuthGuard]},
  {path:"registration",component:RegistrationComponent},
  {path:"addmovie",component:AddmovieComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
