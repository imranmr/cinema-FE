import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {
  movie:any;
  constructor(private data:DataserviceService,private movieservice:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.data.currentmovie.subscribe(
      (res:any)=>{
        this.movie = res;
      }
    )
  }

  updateMovie(name:any, price:any, description:any, hours:any, minutes:any, rating:any, releasedate:any, posterurl:any){
    console.log("Clicked update movie")

    let data={
      "id":this.movie.movieid,
      "price":price,
      "description":description,
      "hours":hours,
      "minutes":minutes,
      "rating":rating,
      "releasedate":releasedate,
      "posterurl":posterurl
    }
    console.log(data);

    this.movieservice.updatemovie(data).subscribe(
      (res:any)=>{
        console.log("Updated Movie:",res);
        this.router.navigate(['dashboard'])
      },(error:any)=>{
        console.log("Update movie Error!",error);
      }
    )

  }
  
}
