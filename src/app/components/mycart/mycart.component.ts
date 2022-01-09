import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  user:any;
  constructor(private data:DataserviceService, private router:Router) { }

  ngOnInit(): void {
    this.data.currentuser.subscribe(data => this.user=data);
  }
  onDelete(productid:number, cartid:number, quanity:string){
    console.log("Deleting!!");

  }

  buynow(){
    console.log("Clicked Buy")
    this.router.navigate(["orderpage"])
  }
}
