import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/_models/subject/table';
import { SubjectService } from 'src/app/_service/subject/subject.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  days=['Sunday','Monday','Tuesday','Wednesday','Thursday'];
  Teachers=[];
  check:number =0;
  // store teacher by reference
  table:any[]= [[{},{},{},{},{},{}],[{},{},{},{},{},{}],[{},{},{},{},{},{}],[{},{},{},{},{},{}],[{},{},{},{},{},{}]]
  Allsubject:Table =new Table (0,'',[],this.table);
  constructor(private subjectService:SubjectService,private aroute:ActivatedRoute,private Router:Router) { }
 save(){
   this.check=0;
   //check if one of element isn't Selected  Not Add Table
  this.table.forEach(element => {
    element.forEach(data => {
      if(data.SubjectName=='no')this.check++;
      if(data.TeacherName=='no')this.check++;

    });
  });
  if(this.check==0){this.subjectService.setTable(this.table,this.Allsubject._id).subscribe(data=>this.Router.navigate(['/studentAffaires/Student/Subject']))}
 }
 Resertable(){
   let con = confirm('Are You Sure, You Want to Reset Table ?! ')
   if(con){this.reset()}
  
 }
 reset(){
  this.table.forEach(element => {// to set intioal value -1 => appear disabled option in select 
    element.forEach(data => {
        data.SubjectName='no';
        data.TeacherName='no';
    });
});
 }
 
  ngOnInit() {
    this.reset();
    // get subject according to class
    this.aroute.params.subscribe(a=>{
      this.subjectService.getOneClass(a.id).subscribe(data=>{
        // Get Data From Table
        if(data[0].Table.length!=0)this.table=data[0].Table;
        this.Allsubject=new Table(data[0]._id,data[0].ClassNo,data[0].Subject,this.table)
        // get TeachersName => appear according to subject
        this.subjectService.getTeachers().subscribe(data=>{
          data.forEach(element => {//array to get  each Teachers  
            element.subjects.classesName.forEach(clas => {// array for get classes Teachers
              if(this.Allsubject.ClassNo == clas.ClassNo)
              {
                this.Teachers.push({_id:element._id,fullName:element.fullName,Class:clas.ClassNo,Subject:element.subjects.subjectName})} // to get teachers teach to this class
                // console.log(this.Teachers)
              });
          });
        })
      });
    },(error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.Router.navigateByUrl("/Login")
  
    });
    
    
  }

}