import { MoviesService } from './../../services/movies.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  olduser:any;
  user:any;
  movies:any;
  constructor(private data:DataserviceService, private router:Router, private userservice:UserService,private movieservice:MoviesService) { }
  
  ngOnInit(): void {

    

    this.data.currentuser.subscribe(data => this.olduser=data);
    if(this.olduser=='null'){
      this.router.navigate(['login']);
    }
    let userdetail={
      "userid":this.olduser.userid
    }
    this.userservice.getlatestuserdetail(userdetail).subscribe(
      (res:any)=>{
        this.user = res;
        this.data.updateUser(res);
        if(this.user.adminrights){
          this.movieservice.getAllMovies().subscribe(
            (res:any)=>{
              this.movies = res;
            }
          )
        }
      }
    )

    



  }
  resetpassword(){
    console.log("resetpassword");
    this.router.navigate(['/resetpassword'])
  }

  updateMovie(movie:any){
    console.log("Update Movie:",movie);
    this.data.updateMovie(movie);
    this.router.navigate(['updatemovie']);
  }

  deleteMovie(movie:any){
    console.log("Delete Movie:", movie);
  }

  updateTiming(timing:any){
    console.log("Update Timing:",timing);
    this.data.updateMovieTime(timing);
    this.router.navigate(['updatemovietime']);
  }
  deleteTiming(timing:any){
    console.log("Delete Timing:", timing);
  }

  addTiming(movie:any){
    console.log("Add timing to movie:",movie);
    this.data.updateMovie(movie);
    this.router.navigate(['addtiming'])
  }

}
