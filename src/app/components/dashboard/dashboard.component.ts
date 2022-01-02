import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  constructor(private data:DataserviceService, private router:Router) { }
  
  ngOnInit(): void {
    this.data.currentuser.subscribe(data => this.user=data);
    if(this.user=='null'){
      this.router.navigate(['login']);
    }

  }
  resetpassword(){
    console.log("resetpassword");
    this.router.navigate(['/resetpassword'])
  }

}
