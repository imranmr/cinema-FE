import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private getallmoviesurl:string="http://localhost:8080/movie/all"
  constructor(private httpClient:HttpClient) { }

  public getAllMovies():any{
    return this.httpClient.get(`${this.getallmoviesurl}`);
  }

}
