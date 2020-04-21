import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/_service/students/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerHeight= window.innerHeight;
  id:number;

  constructor(private stdser:StudentsService, private activeroute:ActivatedRoute , private naviggateRouter:Router) { }

  ngOnInit() {
    this.activeroute.params.subscribe(a=>{
      console.log(a['id']);//id
      this.id=a['id'];
      console.log(this.id)
    })
    // this.stdser.getAllstudents().subscribe(()=>{},  (error)=>{
 
    //   this.naviggateRouter.navigateByUrl("/Login")
    
    // })
  }
}