import { DataserviceService } from './../../services/dataservice.service';
import { MoviesService } from './../../services/movies.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies:any;
  public genres:any;
  moviesub: Subscription = new Subscription;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private movieservice:MoviesService,private data:DataserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
  }

  getGenres(){
    this.movieservice.getgenres().subscribe(
      (res:any)=>{
        this.genres = res;
      }
    )
  }

  filtergenre(genre:any){
    console.log(genre);

    this.movieservice.getmoviefromgenre(genre).subscribe(
      (res:any)=>{
        this.movies = res;
      }
    )
  }

  getMovies(){
    this.movieservice.getAllMovies().subscribe(
      (res:any)=>{
        this.movies = res;
        console.log("response",res);
      },
        (error:any)=>{
          console.log(error);
        }
    );
      
  }

  gotoaboutmovie(movie:any){
    console.log(movie);
    this.data.updateMovie(movie);
    this.router.navigate(['aboutmovie'])
    this.messageEvent.emit(movie);

  }

  searchmovie(name:any){
    console.log("Searching movie",name);
    let searchformat={
      "name":"%"+name+"%"
    }
    console.log(searchformat);

    this.movieservice.searchmovie(searchformat).subscribe(
      (res:any)=>{
        this.movies = res;
      }
    )
  }
}
