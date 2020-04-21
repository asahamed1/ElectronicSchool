import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee/employee.service';
import { LoginService } from 'src/app/_service/login/login.service';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[DatePipe]
})
export class ProfileComponent implements OnInit {
  myInnerWidth= window.innerWidth-17;
  header =['FullName','NationalID','Password','Salary','Address','Phone Number','Data Of Birth','Date Of Start Job'];
  da='';
  employe=[];
  constructor(private employee:EmployeeService , private login:LoginService, private route:Router ,private DatePipe:DatePipe) { }

  ngOnInit() {
    this.employee.getAllEmplyee().subscribe(data=>{
      let ID = JSON.parse(localStorage.getItem('id'))
      data.forEach(emp=>{
       
        if(emp['_id']==ID.id)this.employe=[emp.FullName,emp.NationalID,emp.Password,emp.Salary,emp.Address,emp.PhoneNumber,
          this.DatePipe.transform(emp.DOB,'dd/MM/yyy'),this.DatePipe.transform(emp.DOJ,'dd/MM/yyy')];
      })
    },(error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.route.navigateByUrl("/Login")
  
    })

}
}