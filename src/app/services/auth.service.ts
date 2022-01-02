import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any = null;
  private loginurl:string="http://localhost:8080/user/signin"
  constructor(private httpClient:HttpClient) { }

  public login(userinfo:any):any{
    
    return this.httpClient.post(this.loginurl,userinfo);
  }
}
