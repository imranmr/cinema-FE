import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  constructor(private data:DataserviceService,private router:Router) { }

  ngOnInit(): void {
    this.data.currentuser.subscribe((user)=>{
      this.user=user;
      if(user=='null'){
        localStorage.setItem('isLoggedIn',"false");
      }
      
    });
    
  }
  logout(){
    this.data.logout();
    this.router.navigate(['/home']);
  }

}
