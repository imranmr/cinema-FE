import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
    this.data.currentuser.subscribe(user=>this.user=user);
  }

}
