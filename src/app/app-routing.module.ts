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
  {path:"confirmationpage",component:ConfirmationpageComponent},
  {path:"addtiming",component:AddtimingComponent},
  {path:"updatemovie",component:UpdatemovieComponent},
  {path:"updatemovietime",component:UpdatemovietimeComponent},
  {path:"updategenre",component:UpdategenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
