import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private getallmoviesurl:string="http://localhost:8080/movie/all"
  private getmovielocationsurl:string="http://localhost:8080/movietiming/get/location"
  private getmovietimingurl:string="http://localhost:8080/movietiming/search/location"
  private getorderdetailsurl:string="http://localhost:8080/order/getorder"
  private searchmovieurl:string="http://localhost:8080/movie/search"
  private getgenresurl:string="http://localhost:8080/moviegenre/all"
  private searchmoviewithgenreurl:string="http://localhost:8080/movie/search/genre/"
  private addmovietimingurl:string="http://localhost:8080/movietiming/add"
  constructor(private httpClient:HttpClient) { }

  public getAllMovies():any{
    return this.httpClient.get(`${this.getallmoviesurl}`);
  }

  public getmovielocation(movie:any):any{
    return this.httpClient.post(this.getmovielocationsurl,movie)
  }

  public getmovietimingatlocation(moviedata:any){
    return this.httpClient.post(this.getmovietimingurl,moviedata);
  }

  public getorderdetails(orderid:any){
    return this.httpClient.post(this.getorderdetailsurl,orderid);
  }

  public searchmovie(name:any){
    return this.httpClient.post(this.searchmovieurl,name);
  }

  public getgenres(){
    return this.httpClient.get(this.getgenresurl);
  }

  public getmoviefromgenre(genre:any){
    return this.httpClient.get(this.searchmoviewithgenreurl+genre);
  }

  public addmovietiming(timing:any){
    return this.httpClient.post(this.addmovietimingurl,timing);
  }

}
