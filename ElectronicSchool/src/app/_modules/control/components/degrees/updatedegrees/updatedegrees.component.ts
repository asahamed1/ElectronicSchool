import { Component, OnInit } from '@angular/core';
import { AllStudent } from 'src/app/_models/control/allsubject';
import { ControlService } from 'src/app/_service/control/control.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedegrees',
  templateUrl: './updatedegrees.component.html',
  styleUrls: ['./updatedegrees.component.css']
})
export class UpdatedegreesComponent implements OnInit {

  student: AllStudent = new AllStudent(0, '', '', 0, []);
  // get Control Data
  allSubjects = [[{ Subject: 'Math', min: 50, max: 100 }, { Subject: 'Arabic', min: 50, max: 100 }, { Subject: 'English', min: 40, max: 80 }, { Subject: 'Religion', min: 25, max: 50 }, { Subject: 'Music', min: 25, max: 50 }],
  [{ Subject: 'Math', min: 50, max: 100 }, { Subject: 'Arabic', min: 50, max: 100 }, { Subject: 'English', min: 40, max: 80 }, { Subject: 'Religion', min: 25, max: 50 }, { Subject: 'Music', min: 25, max: 50 }, { Subject: 'Science', min: 40, max: 80 }, { Subject: 'History&Geography', min: 40, max: 80 }]];

  allSubject = [];
  saveDegrees = [];
  error = [];
  constructor(private ControlService: ControlService, private aroute: ActivatedRoute, private router: Router
    , private route: Router) {

  }

  check(){
    this.error=[];
    // get all degrees entered by user
    this.saveDegrees.forEach((sub, i) => {
      if (this.student.Class.includes('1/') || this.student.Class.includes('2/') || this.student.Class.includes('3/')) {
        // check if degree greater than max => push to error
        if (sub.Degree > this.allSubject[i].max) { this.error.push({ name: sub.SubjectName, max: this.allSubject[i].max }) }
      } else { if (sub.Degree > this.allSubject[i].max) { this.error.push({ name: sub.SubjectName, max: this.allSubject[i].max }) } }

    });
    
  }
  save() {
  
    if (this.error.length == 0)//check if there is no error
    {
      let editStudent = { NationalID: this.student.NationalID, Degree: this.saveDegrees }
      this.ControlService.update(editStudent).subscribe(data => this.router.navigate(['/control/mainPage/showDegrees']))
   
    }
    }
  ngOnInit() {
    this.aroute.params.subscribe(a => {
      // get student to add degrees
      this.ControlService.getAllStudent().subscribe(data => {
        data.forEach((std, index) => {
          if (a.id == std.FullName) {
            this.student = new AllStudent(std._id, std.FullName, std.Class, std.NationalID, std.Degree);

            //get specific student
            // this.allSubject = this.allSubjects[0];

            if (std.Class.includes('1/') || std.Class.includes('2/') || std.Class.includes('3/')) {
              this.allSubject = this.allSubjects[0];
            } else { this.allSubject = this.allSubjects[1]; }

            for (let index = 0; index < this.allSubject.length; index++) {//for looping to all subjects 
              let x = 0;
              let newDegree = 0
              this.student.Degree.forEach((deg: any) => {
                if (deg.SubjectName == this.allSubject[index].Subject) {// show if degree is registered or first time assigned
                  newDegree = deg.Degree;
                  
                  x++;
                }
              })
              if (x == 0) { this.saveDegrees[index] = { SubjectName: this.allSubject[index].Subject, Degree: 0 } }
              else { this.saveDegrees[index] = { SubjectName: this.allSubject[index].Subject, Degree: newDegree };}
              
            }
          }
        })
      });

    },(error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.route.navigateByUrl("/Login")
  
    })

  }

}
