import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee/employee.service';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/_service/control/control.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerWidth=window.innerHeight-100;
   items=[{name:'Add Degrees',link:'/control/mainPage/showDegrees'},
   {name:'Announce Degrees',link:'/control/mainPage/announceDegrees'}
      ,{name:'My Profile',link:'/control/mainPage/MyProfile'},
    ];
  constructor(private aroute:ActivatedRoute,private employee:ControlService , private route:Router ,) { }

  ngOnInit() {
    this.employee.getAllStudent().subscribe(()=>{

    }
    ,(error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.route.navigateByUrl("/Login")
  
    }
    )
  }

}
