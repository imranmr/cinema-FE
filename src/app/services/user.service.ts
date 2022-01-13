import { DataserviceService } from 'src/app/services/dataservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private iporlocalhost:string="34.230.58.0:8081"//"localhost:8080"
  private resetpasswordurl:string="http://"+this.iporlocalhost+"/user/resetpassword"
  private addtocarturl:string="http://"+this.iporlocalhost+"/cart/add"
  private buycarturl:string="http://"+this.iporlocalhost+"/order/buy"
  private getlatestuserurl:string="http://"+this.iporlocalhost+"/user/detail"
  private updateseatsurl:string="http://"+this.iporlocalhost+"/cart/update"
  private deletecartitemurl:string="http://"+this.iporlocalhost+"/cart/delete"
  private createuserurl:string="http://"+this.iporlocalhost+"/user/create"

  constructor(private httpClient:HttpClient,private data:DataserviceService) { }

  public resetpassword(user:any){
    return this.httpClient.put(this.resetpasswordurl,user);
  }

  public addtocart(data:any){
    return this.httpClient.post(this.addtocarturl,data);
  }

  public buycart(data:any){
    return this.httpClient.post(this.buycarturl,data);
  }

  public getlatestuserdetail(user:any){
    return this.httpClient.post(this.getlatestuserurl,user);
  }

  public updateseats(seats:any){
    return this.httpClient.put(this.updateseatsurl,seats);
  }

  public deletecartitem(item:any){
    return this.httpClient.post(this.deletecartitemurl,item);
  }

  public createuser(data:any){
    return this.httpClient.post(this.createuserurl,data);
  }

}
