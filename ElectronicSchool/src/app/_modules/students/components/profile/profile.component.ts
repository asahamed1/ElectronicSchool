import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/_models/students/students';
import { StudentsService } from 'src/app/_service/students/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myInnerHeight= window.innerHeight;
  myInnerWidth= window.innerWidth;
  StudentProfile:FormGroup;
  student:Student;

  constructor(private stdser:StudentsService ,private activeroute:ActivatedRoute ,private naviggateRouter:Router, private loginServer:LoginService) { }

  ngOnInit() {
//     this.stdser.getStudentProfile().subscribe(a=>{
//       console.log(a);
//       this.student=a;
    
// });

    // this.activeroute.params.subscribe(a => {
      let ID = JSON.parse(localStorage.getItem('id'));// to get current ID for Student
      console.log(ID)
      this.stdser.getStudentData(ID.id).subscribe(s => {
        // console.log(s);//student object
        this.student = s;
        console.log(s);
        this.StudentProfile.setValue({
          "FullName": s.FullName,
          "NationalID": s.NationalID,
          "Password": s.Password,
          "Adress": s.Adress,
          "PhoneNumber": s.PhoneNumber,
          "Class": s.Class
        });

    
      })

   
// this.stdser.getAllstudents().subscribe(()=>{},  (error)=>{
 
//   this.naviggateRouter.navigateByUrl("/Login")

// })
    
    this.StudentProfile = new FormGroup({
      "FullName": new FormControl("", Validators.required),
      "NationalID": new FormControl("", [Validators.required, Validators.minLength(12)]),
      "Password": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "Adress": new FormControl("", Validators.required),
      "PhoneNumber": new FormControl("", Validators.required),
      "Class": new FormControl("", Validators.required),

    });




  }

}
