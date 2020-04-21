import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/_models/subject/subject';
import { SubjectService } from 'src/app/_service/subject/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
  myHeight= window.innerHeight-150;
  subjects:Subject[] =[];
  Years =["AllYear",1,2,3,4,5,6];
  selectYear ="AllYear";
  constructor(private subjectService : SubjectService,private router:Router) { }
  sa(d){
    this.selectYear=d;
  }
  deleteClass(id){
    
      this.subjectService.delete(id).subscribe(()=>{this.ngOnInit()});
    
  }

  ngOnInit() {
    this.subjectService.getAllClasses().subscribe(data=>{this.subjects=data;}, (error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.router.navigateByUrl("/Login")
  
    });
  }

}

