import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editsalary',
  templateUrl: './editsalary.component.html',
  styleUrls: ['./editsalary.component.css']
})
export class EditsalaryComponent implements OnInit {

  oldTeacherSalary:Number;
  newTeacherSalary:Number
  id:Number
    constructor(
  private teacherService:TeacherService,
  private activatedRouter :ActivatedRoute,
  private navigatedRouter :Router

  
  
    ) { }
  
    ngOnInit() {
      this.activatedRouter.params.subscribe((activeLink)=>{
        this.teacherService.getOneTeacher(activeLink.id).subscribe((teacher)=>{
              this.oldTeacherSalary=teacher.salary;
              this.id= activeLink.id;
        })
  
      })
    }
    updateTeacherSalary(form){
      console.log(this.newTeacherSalary)
      this.teacherService.updateTeacherSalary({id:this.id,salary:this.newTeacherSalary})
      .subscribe((data)=>{
        console.log(data)
        this.navigatedRouter.navigate(["/personalAffaires/Employee/Teacher"])

        // this.navigatedRouter.navigate(["/personalAffaires/Employee/Teacher"])
        
        
  
      })
      console.log(form)
  
  
    }
     inValid(){

    if(this.newTeacherSalary==0 ||this.newTeacherSalary==undefined ){
      return true
    }
   }
  
  }