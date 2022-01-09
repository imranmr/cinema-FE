import { Router } from '@angular/router';
import { ToTwelveHourTimePipe } from './../../to-twelve-hour-time.pipe';
import { MoviesService } from './../../services/movies.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-movietimes',
  templateUrl: './movietimes.component.html',
  styleUrls: ['./movietimes.component.css']
})
export class MovietimesComponent implements OnInit {
  movies:any;
  movietiming:any;
  location:any;
  
  constructor(private data:DataserviceService,private movieService:MoviesService, private toTwelveHourTime:ToTwelveHourTimePipe,private router:Router) { }

  ngOnInit(): void {
    this.data.currentmovie.subscribe(movie=>this.movies=movie);
    this.data.currentlocation.subscribe(location => this.location = location);
    console.log("Location:",this.location);
    let moviedata={
      "id":this.movies.movieid,
      "location":this.location
    };
    console.log(moviedata);
    this.movieService.getmovietimingatlocation(moviedata).subscribe(
      (res:any)=>{
        console.log("Response:",res);
        this.movietiming = res;
        
      },(error:any)=>{
        console.log(error);
      }
    )

    
  }

  picktime(movietime:any){
    console.log(movietime);
    this.data.updateMovieTime(movietime);
    this.router.navigate(['seats']);
    
  }

}
