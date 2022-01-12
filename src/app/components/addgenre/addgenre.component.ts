import { MoviesService } from './../../services/movies.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgenre',
  templateUrl: './addgenre.component.html',
  styleUrls: ['./addgenre.component.css']
})
export class AddgenreComponent implements OnInit {
  movie:any;
  constructor(private data:DataserviceService,private movieservice:MoviesService, private router:Router) { }

  ngOnInit(): void {
    this.data.currentmovie.subscribe(
      (res:any)=>{
        this.movie=res;
      }
    )
  }
  addGenre(genre:any){
    console.log("Submitted")
    let data={
      "id": this.movie.movieid,
      "genre": genre
    }

    console.log("Data",data);

    this.movieservice.addmoviegenre(data).subscribe(
      (res:any)=>{
        this.router.navigate(['dashboard'])
      }
    )
  }

}
