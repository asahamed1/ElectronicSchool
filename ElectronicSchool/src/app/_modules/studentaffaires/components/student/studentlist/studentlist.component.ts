import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/students/students';
import { StudentsService } from 'src/app/_service/students/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  myHeight= window.innerHeight-150;
  nameSearch:string='';
  resultSearch:string='';
  students: Student[] = [];
  SearchName(){
    this.resultSearch=this.nameSearch;
  }
  constructor(private stdser: StudentsService,private naviggateRouter:Router) { }





  deleteStudent(id: number) {
    // let confirm = window.confirm("Do you want to delete this student");
    // if (confirm) {
      this.stdser.deleteStudent(id).subscribe(a=>{
        for (let i = 0; i < this.students.length; i++) {
          if(id==this.students[i]._id){
            this.students.splice(i,1)

          }
          
        }
        // console.log(a);

      });

      // for (let i = 0; i < this.students.length; i++) {
      //   if (id == this.students[i]._id) {
      //     this.stdser.deleteStudent(this.students[i]._id).subscribe(a => {
      //       console.log(a);

      //     });


      //   }


      //   // this.students.splice(i, 1);

      // }

    // }
    

  }


ngOnInit() {
  this.stdser.getAllstudents().subscribe(a => {
    console.log(a);
    this.students = a;

  }, (error)=>{
    // console.log("erooor  fffffffffffffffff")
    // console.log(error)

    this.naviggateRouter.navigateByUrl("/Login")

  });

}

}
