import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/_service/students/students.service';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { SubjectService } from 'src/app/_service/subject/subject.service';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {
myHeight= window.innerHeight-150;
isExist=false;
classes=[];
  savestudentdata:FormGroup;
  number:Number;
  stdNum:number=0;
  checkSTD:boolean=false;
  // nstd:Student= new Student(1,"asmaa hamed",9876524352,111,"mnofya",87678,2/2,[]);
  // object from  save data and send it to server ... ????
   
  constructor( private stdser:StudentsService , private router :Router,private subser:SubjectService) { }



  formValid(){
    return this.savestudentdata.invalid;

   }
    
    // this.stdser.addNewStudent(this.nstd).subscribe(a=>{
    //   console.log(a);
      
    // },err=>{
    //   console.log(err)})
    check(){ // console.log(this.savestudentdata.value);
      this.isExist=false;
      //check if employee exist or not
      this.stdser.getAllstudents().subscribe(stds=>{
        stds.forEach(std=>{
          if(std.NationalID==this.savestudentdata.get('NationalID').value){this.isExist=true;}
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
    onSave(){
      if(!this.isExist){
        if(!this.checkSTD){
        this.stdser.addNewStudent(this.savestudentdata.value).subscribe(a=>{
          this.router.navigateByUrl('/studentAffaires/Student/students')
          // console.log(a);
        },err=>{
          //  console.log(err)
          });
      }}
    }
  


get Fname(){
  return this.savestudentdata.get("FullName");
}

get nationalId(){
  return this.savestudentdata.get("NationalID");

}

get password(){
  return this.savestudentdata.get("Password");

}

get adress(){
  return this.savestudentdata.get("Adress");

}

get phoneNumber(){
  return this.savestudentdata.get("PhoneNumber");

}

get classroom(){
  return this.savestudentdata.get("Classroom");

}
get DOB(){
  return this.savestudentdata.get('DOB');
}
get DOJ(){
  return this.savestudentdata.get('DOJ');
}
// get mySubject(){
//   return this.savestudentdata.get("mysubject");

// }

// get myDegree(){
//   return this.savestudentdata.get("mydegree");
// }


  // Id:FormControl=new FormControl(10,Validators.required);
  // show(){
  //   console.log(this.Fname);
  //   console.log(this.nationalId);
  //   console.log(this.password);
  //   console.log(this.Subjects);
  // };


 
  
  ngOnInit(): void {
    // this.stdser.getAllstudents().subscribe(()=>{}, (error)=>{
    //   // console.log("erooor  fffffffffffffffff")
    //   // console.log(error)
  
    //   this.router.navigateByUrl("/Login")
  
    // })
    this.subser.getAllClasses().subscribe((data)=>{
      data.forEach(clas=>{
        this.classes.push(clas.ClassNo)
      })
  })
    this.savestudentdata=new FormGroup({
      "FullName": new FormControl("",[Validators.required,Validators.minLength(15)]),
      "NationalID":new FormControl("",[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),
      "Password":new FormControl("",[Validators.required,Validators.minLength(8)]),
      "Adress": new FormControl("",Validators.required),
      "PhoneNumber": new FormControl("",Validators.required),
      "Classroom": new FormControl("",Validators.required),
      'DOB' : new FormControl(null,[Validators.required]),
      'DOJ' : new FormControl(null,[Validators.required]),
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





  


