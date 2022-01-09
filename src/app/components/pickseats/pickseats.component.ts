import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickseats',
  templateUrl: './pickseats.component.html',
  styleUrls: ['./pickseats.component.css']
})
export class PickseatsComponent implements OnInit {
  movietime:any;
  user:any;
  movie:any;
  constructor(private data:DataserviceService,private router:Router, private userservice:UserService,private authservice:AuthService) { }

  ngOnInit(): void {
    this.data.currentmovietime.subscribe((movietime:any) =>this.movietime=movietime);
  }
  setseats(numberseats:any){
    console.log(numberseats);

    this.data.updateSeats(numberseats);
    
    //submit update cart
    this.data.currentuser.subscribe((res:any)=>this.user=res);
    this.data.currentmovie.subscribe((res:any)=>this.movie=res);
    let cartdata={
      "userid": this.user.userid,
      "movieid": this.movie.movieid,
      "seats": numberseats,
      "timingid": this.movietime.movietimingid
    }

    console.log(cartdata);

    this.userservice.addtocart(cartdata).subscribe(
      (res:any)=>{
        console.log("Add to cart res:",res);

        let userlogin={
          "email":this.user.email,
          "password":this.user.password
        }
        this.authservice.login(userlogin).subscribe((res:any)=>this.data.updateUser(res));
        this.router.navigate(['mycart'])

      },(error:any)=>{
        console.log("Error add to cart:",error);
      }
    )
    

    //route to cart

    //if logged off
    //forward to signin

    //if signed it, add to cart


  }
}
