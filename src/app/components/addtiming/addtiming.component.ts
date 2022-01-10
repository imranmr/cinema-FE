import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtiming',
  templateUrl: './addtiming.component.html',
  styleUrls: ['./addtiming.component.css']
})
export class AddtimingComponent implements OnInit {
  movie:any;
  constructor(private data:DataserviceService,private movieservice:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.data.currentmovie.subscribe(
      (res:any)=>{
        this.movie = res;
      }
    )
  }

  addTiming(language:any,seats:any, time:any,date:any,location:any){
    console.log("Submitted update")
    console.log("Data:",language,seats,time,date,location)

    let timing={
      "id":this.movie.movieid,
      "language":language,
      "seats": seats,
      "time":time+":00",
      "date":date,
      "location":location
    }
    console.log(timing);
    this.movieservice.addmovietiming(timing).subscribe(
      (res:any)=>{
        console.log("Successfully added timing:",res);
        this.router.navigate(['dashboard'])
      }
    )


  }
}
