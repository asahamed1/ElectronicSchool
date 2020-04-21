import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_service/News/news.service';
import { News } from 'src/app/_models/News/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  InnerHeight=window.innerHeight-150

  schoolsystem: News [] = [];
  imageSOurse:string
  constructor(
    public NewsServicesService:NewsService) {}
    // this.getUsers();
    deleteNews(id:number){
          this.NewsServicesService.delete(id).subscribe((deleted)=>{
            console.log(deleted)
            for (let i =0; i<this.schoolsystem.length; i++){
              if(this.schoolsystem[i]._id == id){
                this.schoolsystem.splice(i,1)
              }
            }
          })
      //console.log(id)
        }
      
  ngOnInit() {
    this.NewsServicesService.getAll().subscribe((res) => {
      this.schoolsystem = res;
      console.log( this.schoolsystem)

    })
   } 
}





