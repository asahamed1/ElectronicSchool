import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/_service/subject/subject.service';
import { LoginService } from 'src/app/_service/login/login.service';
import { StudentsService } from 'src/app/_service/students/students.service';
import { Student } from 'src/app/_models/students/students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table=[];
  TableWithNames:[]
  student:Student;
  days=['Sunday','Monday','Tuesday','Wednesday','Thursday'];
  classNo = '1/2'//will get from student or parent login
   constructor(private subject:SubjectService,private naviggateRouter:Router ,private loginServer:LoginService ,private stdser:StudentsService) { }
 
   ngOnInit() {
    let ID = JSON.parse(localStorage.getItem('id'));// to get current ID for Student
      this.stdser.getStudentData(ID.id).subscribe(s => {
        this.student = s;
        this.classNo = s.Class;
        this.subject.getAllClasses().subscribe(data=>{
          data.forEach(t=>{
           if(this.classNo==t.ClassNo)this.table=t.Table;
           // to change teachers id => names
           this.subject.getTeachers().subscribe((teacher)=>{
          for (let index = 0; index < this.table.length; index++) {
            for (let j = 0; j < this.table[index].length; j++) {
            //  console.log(this.table[index][j].TeacherName)
              teacher.forEach(t=>{
                if(t._id==this.table[index][j].TeacherName)this.table[index][j].TeacherName=t.fullName;
              })
            }
            
          }
        })// end chanching
          })      
        })
    
       
      })
      // this.stdser.getAllstudents().subscribe(()=>{},  (error)=>{
 
      //   this.naviggateRouter.navigateByUrl("/Login")
      
      // })
   }
 
 }
 
