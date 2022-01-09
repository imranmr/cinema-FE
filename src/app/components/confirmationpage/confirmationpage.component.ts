import { MoviesService } from './../../services/movies.service';
import { UserService } from './../../services/user.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmationpage',
  templateUrl: './confirmationpage.component.html',
  styleUrls: ['./confirmationpage.component.css']
})
export class ConfirmationpageComponent implements OnInit {
  temporder:any;
  order:any;
  user:any;
  constructor(private data:DataserviceService,private movieservice:MoviesService,private userservice:UserService) { }

  ngOnInit(): void {
    this.data.currentuser.subscribe((res:any)=>this.user=res);
    this.data.currentorder.subscribe((res:any)=>this.temporder=res);
    let orderiddetails={
      "orderid":this.temporder.orderid
    }
    this.movieservice.getorderdetails(orderiddetails).subscribe(
      (res:any)=>{
        console.log("Latest order detail:",res);
        this.order=res;
        let userdetail={
          "userid":this.user.userid
        }
        this.userservice.getlatestuserdetail(userdetail).subscribe(
          (res:any) => {
            this.data.updateUser(res);
          }
        )

      },(error:any)=>{
        console.log("Error:",error);
      }
    )

  }

}
