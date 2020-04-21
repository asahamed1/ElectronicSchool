import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ParentService:ParentService ,private router:Router) { }

  ngOnInit() {
    this.ParentService.getAll().subscribe(()=>{

    }
    // ,(error)=>{
    //   // console.log("erooor  fffffffffffffffff")
    //   // console.log(error)
  
    //   this.router.navigateByUrl("/Login")
  
    // }
    )
  }

}
