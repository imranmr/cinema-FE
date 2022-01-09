import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-aboutmovie',
  templateUrl: './aboutmovie.component.html',
  styleUrls: ['./aboutmovie.component.css']
})
export class AboutmovieComponent implements OnInit {
  message:any;
  constructor(private data: DataserviceService) { }

  ngOnInit(): void {
    this.data.currentmovie.subscribe(message=>this.message=message);
  }



  
}
