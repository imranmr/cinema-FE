import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
  movie:any;
  constructor(private data: DataserviceService, private movieService:MoviesService, private router:Router) { }
  location:any;

  ngOnInit(): void {
    this.data.currentmovie.subscribe(message=>this.movie=message);
   
    console.log("Movie:",this.movie);
    
    let moviedata={
      "id":this.movie.movieid
    };
    this.movieService.getmovielocation(moviedata).subscribe(
      (res: any) => {
        this.location=res;
        console.log("Location",this.location);
      });
    
  }
  findmovietimes(clicklocation:string){
  
    this.data.updateLocation(clicklocation);
    console.log("Set Location:",clicklocation);
    this.router.navigate(['movietimes']);

  }


}
