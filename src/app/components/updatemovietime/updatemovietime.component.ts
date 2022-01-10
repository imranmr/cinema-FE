import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatemovietime',
  templateUrl: './updatemovietime.component.html',
  styleUrls: ['./updatemovietime.component.css']
})
export class UpdatemovietimeComponent implements OnInit {
  movietime:any;
  constructor(private data:DataserviceService,private movieservice:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.data.currentmovietime.subscribe(
      (res:any)=>{
        this.movietime = res;
      }
    )
  }


  updatemovietime(language:any, seats:any, time:any, date:any,location:any){
    console.log("clicked update movie");

    let data ={
      "id": this.movietime.movietimingid,
      "time": time+":00",
      "seats":seats,
      "date":date,
      "location":location,
      "language": language
    }
    console.log("Data:",data);

    this.movieservice.updatemovietiming(data).subscribe(
      (res:any)=>{
        console.log("Successfully updated movie time:",res)
        this.router.navigate(['dashboard'])
      }
    )
  }

}
