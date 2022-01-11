import { MoviesService } from './../../services/movies.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updategenre',
  templateUrl: './updategenre.component.html',
  styleUrls: ['./updategenre.component.css']
})
export class UpdategenreComponent implements OnInit {
  genre:any
  constructor(private data:DataserviceService, private movieservice:MoviesService,private router:Router) { }

  ngOnInit(): void {
    this.data.currentgenre.subscribe(
      (res:any)=>{
        this.genre = res;
      }
    )
  }

  updategenre(genre:any){
    console.log("update genre",genre)
    let data ={
      "id": this.genre.moviegenreid,
      "genre":genre
    }
    console.log("Data",data)

    this.movieservice.updatemoviegenre(data).subscribe(
      (res:any)=>{
        this.router.navigate(["dashboard"])
      }
    )
  }

}
