import { DataserviceService } from 'src/app/services/dataservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resetpasswordurl:string="http://localhost:8080/user/resetpassword"
  constructor(private httpClient:HttpClient,private data:DataserviceService) { }

  public resetpassword(user:any){
    return this.httpClient.put(this.resetpasswordurl,user);
  }
}
