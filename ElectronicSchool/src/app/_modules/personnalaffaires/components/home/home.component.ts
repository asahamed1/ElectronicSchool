import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerHeight= window.innerHeight-200;
  items=[
    {name:'Teachers',link:'/personalAffaires/Employee/Teacher'},{name:'Add Teacher',link:'/personalAffaires/Employee/TeacherAdd'},{name:'Employees',link:'/personalAffaires/Employee/List'} ,
    {name:'Add Employee',link:'/personalAffaires/Employee/Add'} ,{name:'My Profile',link:'/personalAffaires/Employee/Profile'}]
  constructor(private employee:EmployeeService ,private route:Router,) { }

  ngOnInit() {
    this.employee.getAllEmplyee().subscribe(()=>{},(error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.route.navigateByUrl("/Login")
  
    })
  }

}
