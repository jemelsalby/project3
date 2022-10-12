import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetchdata()
   }

  fetchdata=()=>{
    this.api.view().subscribe(
      (data)=>{this.list=data}
    )
  }

  list:any=[]

  ngOnInit(): void {
  }

}
