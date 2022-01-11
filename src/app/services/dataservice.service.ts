import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private user = new BehaviorSubject('null');
  currentuser = this.user.asObservable();
  private movie = new BehaviorSubject('null');
  currentmovie = this.movie.asObservable();
  
  private location= new BehaviorSubject('null');
  currentlocation = this.location.asObservable();

  private movietime = new BehaviorSubject('null');
  currentmovietime=this.movietime.asObservable();

  private seats = new BehaviorSubject('null');
  currentseats=this.seats.asObservable();

  private order = new BehaviorSubject('null');
  currentorder=this.order.asObservable();

  private genre = new BehaviorSubject('null');
  currentgenre=this.genre.asObservable();

  constructor() { }

  updateMovie(movie:any){
    this.movie.next(movie);
  }

  updateUser(user:any){
    this.user.next(user);
  }

  updateLocation(location:any){
    this.location.next(location);
  }

  updateMovieTime(movietime:any){
    this.movietime.next(movietime);
  }

  updateSeats(seats:any){
    this.seats.next(seats);
  }

  updateOrder(order:any){
    this.order.next(order);
  }

  updateGenre(genre:any){
    this.genre.next(genre);
  }

  logout() :void {    
      localStorage.setItem('isLoggedIn','false'); 
      this.updateUser('null');     
  }    

}
