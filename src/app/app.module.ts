import { AuthGuard } from './guards/auth.guard';
import { MoviesService } from './services/movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutmovieComponent } from './components/aboutmovie/aboutmovie.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycartComponent } from './components/mycart/mycart.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { LocationComponent } from './components/location/location.component';
import { MovietimesComponent } from './components/movietimes/movietimes.component';
import { ToTwelveHourTimePipe } from './to-twelve-hour-time.pipe';
import { PickseatsComponent } from './components/pickseats/pickseats.component';
import { OrderpageComponent } from './components/orderpage/orderpage.component';
import { ConfirmationpageComponent } from './components/confirmationpage/confirmationpage.component';
import { AddtimingComponent } from './components/addtiming/addtiming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutmovieComponent,
    DashboardComponent,
    LoginComponent,
    MycartComponent,
    ResetpasswordComponent,
    LocationComponent,
    MovietimesComponent,
    ToTwelveHourTimePipe,
    PickseatsComponent,
    OrderpageComponent,
    ConfirmationpageComponent,
    AddtimingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,ToTwelveHourTimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
