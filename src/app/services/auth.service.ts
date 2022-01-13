import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any = null;
  private iporlocalhost:string="34.230.0.58.0:8081"//"localhost:8080"
  private loginurl:string="http://"+this.iporlocalhost+"/user/signin"
  constructor(private httpClient:HttpClient) { }

  public login(userinfo:any):any{
    
    return this.httpClient.post(this.loginurl,userinfo);
  }
}
