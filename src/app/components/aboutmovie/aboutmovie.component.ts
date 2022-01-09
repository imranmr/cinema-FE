import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-aboutmovie',
  templateUrl: './aboutmovie.component.html',
  styleUrls: ['./aboutmovie.component.css']
})
export class AboutmovieComponent implements OnInit {
  message:any;
  constructor(private data: DataserviceService,private router:Router) { }

  ngOnInit(): void {
    this.data.currentmovie.subscribe(message=>this.message=message);
  }

  checklogin(){
    if(localStorage.getItem('isLoggedIn')=="false"){
      this.router.navigate(['login'])
    }
    else{
      this.router.navigate(['location'])
    }
  }


  
}
