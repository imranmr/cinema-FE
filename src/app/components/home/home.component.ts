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
  moviesub: Subscription = new Subscription;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private movieservice:MoviesService,private data:DataserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getMovies();
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
    this.data.changeMessage(movie);
    this.router.navigate(['aboutmovie'])
    this.messageEvent.emit(movie);

  }
}
