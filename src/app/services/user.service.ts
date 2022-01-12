import { DataserviceService } from 'src/app/services/dataservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resetpasswordurl:string="http://localhost:8080/user/resetpassword"
  private addtocarturl:string="http://localhost:8080/cart/add"
  private buycarturl:string="http://localhost:8080/order/buy"
  private getlatestuserurl:string="http://localhost:8080/user/detail"
  private updateseatsurl:string="http://localhost:8080/cart/update"
  private deletecartitemurl:string="http://localhost:8080/cart/delete"
  private createuserurl:string="http://localhost:8080/user/create"

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
