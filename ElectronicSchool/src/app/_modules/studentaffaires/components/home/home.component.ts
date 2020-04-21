import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerHeight= window.innerHeight-200;
  items=[
    {name:'Students',link:'/studentAffaires/Student/students'},{name:'Add Student',link:'/studentAffaires/Student/StudentAdd'},{name:'Parents',link:'/studentAffaires/Student/parent'} ,
    {name:'Add Parent',link:'/studentAffaires/Student/parentadd'},{name:'Student Subjects',link:'/studentAffaires/Student/Subject'}  ,{name:'My Profile',link:'/studentAffaires/Student/Profile'}]
 
  constructor(private parent:ParentService,private router:Router) { }

  ngOnInit() {
    this.parent.getAll().subscribe(()=>{}, (error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.router.navigateByUrl("/Login")
  
    })
  }

}
