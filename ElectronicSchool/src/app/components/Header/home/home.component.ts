import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/_models/News/news';
import { NewsService } from 'src/app/_service/News/news.service';
import { ActivityService } from 'src/app/_service/Activity/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  news: News[];
   activities

  constructor(private activSer: ActivityService,private newser:NewsService) { }

  ngOnInit() {
    //get news ....
    this.newser.getAll().subscribe(a => {
      // console.log(a);
      this.news = a;
      // console.log(this.news);
    });

    // get activities ...
    this.activSer.getAll().subscribe(a => {
      // console.log(a);
      this.activities = a;
      // console.log(this.activities);
    });







  }

}
