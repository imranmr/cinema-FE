import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  olduser:any;
  user:any;
  constructor(private data:DataserviceService, private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.data.currentuser.subscribe(data => this.olduser=data);
    
    this.updateUser();
  }

  updateUser(){
    let userdetail={
      "userid":this.olduser.userid
    }
    this.userservice.getlatestuserdetail(userdetail).subscribe(
      (res:any)=>{
        this.user = res;
      }
    )
  }

  onDelete(cartid:any){
    
    let data = {
      "cartitemid": cartid
    }
    console.log("Deleting:",data);
    this.userservice.deletecartitem(data).subscribe(
      (res:any)=>{
        this.updateUser();
      }
    )


  }

  buynow(){
    console.log("Clicked Buy")
    this.router.navigate(["orderpage"])
  }
  updateSeats(seats:any,cartitemid:any){
    var numberseats:Number = +seats 
    console.log("Update seats",seats);
    let updateseat = {
      "cartitemid":cartitemid,
      "seats":numberseats
    }
    this.userservice.updateseats(updateseat).subscribe(
      (res:any)=>{
        this.updateUser();
      }
    )
    console.log(updateseat);
  }
}
