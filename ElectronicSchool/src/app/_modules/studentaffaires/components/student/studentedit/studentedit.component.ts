import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Student } from 'src/app/_models/students/students';
import { StudentsService } from 'src/app/_service/students/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SubjectService } from 'src/app/_service/subject/subject.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css'],
  providers:[DatePipe]
})
export class StudenteditComponent implements OnInit {

  saveNewStudentData: FormGroup;
  student: Student;
  classes=[];
  isExist:boolean=false;
  checkSTD=false;
  stdNum=0;
  number=0;
  constructor(private stdser: StudentsService,private subser:SubjectService,private dataPipe:DatePipe,private naviggateRouter:Router, private activeroute: ActivatedRoute) {

  }

  check(){ // console.log(this.savestudentdata.value);
    this.isExist=false;
    //check if employee exist or not
    this.stdser.getAllstudents().subscribe(stds=>{
      stds.forEach(std=>{
        if(std.NationalID==this.saveNewStudentData.get('NationalID').value){this.isExist=true;}
      });
      
    });}
    checkNoOfStudent(){
      this.checkSTD=false;
      this.stdNum=0;
      this.number=0;
      this.subser.getAllClasses().subscribe(data=>{
        //get maximum number 
        data.forEach(std=>{
          if(this.classroom.value==std.ClassNo)this.number=std.StudentNo;
        });
        //get student number 
        this.stdser.getAllstudents().subscribe(stds=>{
          stds.forEach(student=>{
            if(student.Class==this.classroom.value)this.stdNum++;
            if(this.stdNum>this.number)this.checkSTD=true;
          });
        })
      })
    }
  onSaveNewdata(){
    // console.log(this.saveNewStudentData.value);
    if(!this.isExist){
      if(!this.checkSTD){
    this.activeroute.params.subscribe(a=>{
      this.stdser.updateStudentData(this.saveNewStudentData.value,a.id).subscribe(std=>{
        // console.log(std);
            this.naviggateRouter.navigateByUrl('/studentAffaires/Student/students')
      },err=>{
        // console.log(err)
      })
    });
    
  }}
  }

  // show() {
  //   console.log(this.student.FullName);
  // }


  formValid() {
    return this.saveNewStudentData.invalid;

  }

  get fullname() {
    return this.saveNewStudentData.get("FullName");
  }


  get nationalId(){
    return this.saveNewStudentData.get("NationalID");

  }

 get password(){
  return this.saveNewStudentData.get("Password");

 }

  get adress(){
    return this.saveNewStudentData.get("Adress");

  }

  get phoneNumber(){
    return this.saveNewStudentData.get("PhoneNumber");

  }
  get DOB(){
    return this.saveNewStudentData.get('DOB');
  }
  get DOJ(){
    return this.saveNewStudentData.get('DOJ');
  }
  get classroom(){
    return this.saveNewStudentData.get("Classroom");

   }


  ngOnInit(): void {
    this.subser.getAllClasses().subscribe((data)=>{
      data.forEach(clas=>{
        this.classes.push(clas.ClassNo)
      })
  })
    this.activeroute.params.subscribe(a => {
      this.stdser.getStudentData(a.id).subscribe(s => {
        // console.log(s);// object
        this.student = s;
        let DOB = this.dataPipe.transform(s.DOB,'yyyy-MM-dd');
        let DOJ = this.dataPipe.transform(s.DOJ,'yyyy-MM-dd');
        this.saveNewStudentData.setValue({
          "FullName": s.FullName,
          "NationalID": s.NationalID,
          "Password": s.Password,
          "Adress": s.Adress,
          "PhoneNumber": s.PhoneNumber,
          "Classroom": s.Class,
          "DOB":DOB,
          'DOJ':DOJ,
        })



        // console.log(this.student);

      })

      // console.log(a); // print id 
    }, (error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.naviggateRouter.navigateByUrl("/Login")
  
    });
    ////////////////
    this.saveNewStudentData = new FormGroup({
      "FullName": new FormControl("", [Validators.required,Validators.minLength(15)]),
      "NationalID": new FormControl("", [Validators.required, Validators.minLength(12)]),
      "Password": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "Adress": new FormControl("", Validators.required),
      "PhoneNumber": new FormControl("", Validators.required),
      "Classroom": new FormControl("", Validators.required),
      'DOB' : new FormControl(null,[Validators.required]),
      'DOJ' : new FormControl("",[Validators.required]),
      // "mysubject":new FormControl("",Validators.required),
      // "mydegree":new FormControl("",Validators.required),

      //   "subjects":new FormArray([new FormGroup({
      //     "subject":new FormControl("Math"),
      //     "degree":new FormControl("95%"),
      //   })
      // ]),


    })







  }

}
