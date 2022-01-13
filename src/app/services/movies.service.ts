import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private iporlocalhost:string="34.230.58.0:8081"//"localhost:8080"
  private getallmoviesurl:string="http://"+this.iporlocalhost+"/movie/all"
  private getmovielocationsurl:string="http://"+this.iporlocalhost+"/movietiming/get/location"
  private getmovietimingurl:string="http://"+this.iporlocalhost+"/movietiming/search/location"
  private getorderdetailsurl:string="http://"+this.iporlocalhost+"/order/getorder"
  private searchmovieurl:string="http://"+this.iporlocalhost+"/movie/search"
  private getgenresurl:string="http://"+this.iporlocalhost+"/moviegenre/all"
  private searchmoviewithgenreurl:string="http://"+this.iporlocalhost+"/movie/search/genre/"
  private addmovietimingurl:string="http:/"+this.iporlocalhost+"/movietiming/add"
  private updatemovieurl:string="http://"+this.iporlocalhost+"/movie/update"
  private updatemovietimingurl:string="http://"+this.iporlocalhost+"/movietiming/update"
  private deletemovietimingurl:string="http://"+this.iporlocalhost+"/movietiming/delete"
  private deletemovieurl:string="http//"+this.iporlocalhost+"/movie/delete"
  private updatemoviegenreurl:string="http://"+this.iporlocalhost+"/moviegenre/update"
  private deletemoviegenreurl:string="http://"+this.iporlocalhost+"/moviegenre/delete"
  private addmoviegenreurl:string="http://"+this.iporlocalhost+"/moviegenre/add"
  private addmovieurl:string="http://"+this.iporlocalhost+"/movie/add"
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

  public addmovie(data:any){
    return this.httpClient.post(this.addmovieurl,data);
  }

  public updatemoviegenre(data:any){
    return this.httpClient.put(this.updatemoviegenreurl,data);
  }

  public deletemoviegenre(data:any){
    return this.httpClient.post(this.deletemoviegenreurl,data);
  }

  public addmoviegenre(data:any){
    return this.httpClient.post(this.addmoviegenreurl,data);
  }

}
