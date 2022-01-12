import { MoviesService } from './../../services/movies.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  user:any;
  constructor(private data:DataserviceService,private router:Router,private movieservice:MoviesService) { }

  ngOnInit(): void {
    this.data.currentuser.subscribe(
      (res:any)=>{
        this.user = res;
      }
    )
  }
  addMovie(name:any, price:any, description:any, hours:any, minutes:any, rating:any, releasedate:any, posterurl:any){
    let data = {
      "name":name,
      "price":price,
      "description":description,
      "id":this.user.userid,
      "hours":hours,
      "minutes":minutes,
      "rating":rating,
      "releasedate":releasedate,
      "posterurl":posterurl
    }
    console.log(data);
    this.movieservice.addmovie(data).subscribe(
      (res:any)=>{
        this.router.navigate(['dashboard'])
      }
    )
  }
}
