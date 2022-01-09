import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  olduser:any;
  user:any;
  constructor(private data:DataserviceService, private router:Router, private userservice:UserService) { }
  
  ngOnInit(): void {

    

    this.data.currentuser.subscribe(data => this.olduser=data);
    if(this.olduser=='null'){
      this.router.navigate(['login']);
    }
    let userdetail={
      "userid":this.olduser.userid
    }
    this.userservice.getlatestuserdetail(userdetail).subscribe(
      (res:any)=>{
        this.user = res;
        this.data.updateUser(res);
      }
    )



  }
  resetpassword(){
    console.log("resetpassword");
    this.router.navigate(['/resetpassword'])
  }

}
