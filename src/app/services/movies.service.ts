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
  private updatemovieurl:string="http://localhost:8080/movie/update"
  private updatemovietimingurl:string="http://localhost:8080/movietiming/update"
  private deletemovietimingurl:string="http://localhost:8080/movietiming/delete"
  private deletemovieurl:string="http//localhost:8080/movie/delete"
  private updatemoviegenreurl:string="http://localhost:8080/moviegenre/update"
  private deletemoviegenreurl:string="http://localhost:8080/moviegenre/delete"
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

  public updatemovie(data:any){
    return this.httpClient.put(this.updatemovieurl,data);
  }

  public updatemovietiming(data:any){
    return this.httpClient.put(this.updatemovietimingurl,data);
  }

  public deletemovietiming(data:any){
    return this.httpClient.post(this.deletemovietimingurl,data);
  }

  public deletemovie(data:any){
    return this.httpClient.post(this.deletemovieurl,data);
  }

  public updatemoviegenre(data:any){
    return this.httpClient.put(this.updatemoviegenreurl,data);
  }

  public deletemoviegenre(data:any){
    return this.httpClient.post(this.deletemoviegenreurl,data);
  }

}
