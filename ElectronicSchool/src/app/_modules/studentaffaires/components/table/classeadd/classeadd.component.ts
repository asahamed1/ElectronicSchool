import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'src/app/_models/subject/subject';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/_service/subject/subject.service';

@Component({
  selector: 'app-classeadd',
  templateUrl: './classeadd.component.html',
  styleUrls: ['./classeadd.component.css']
})
export class ClasseaddComponent implements OnInit {
  myHeight=window.innerHeight-150;
  addSubject:FormGroup;
  subject:Subject = new Subject(0,'',0,[]);
  errormsg:string='';
   allSubject=[[{Subject:'math' ,min:50,max:100},{Subject:'arabic' ,min:50,max:100},{Subject:'english',min:40,max:80},{Subject:'religion',min:25,max:50},{Subject:'music',min:25,max:50}],
    [{Subject:'math' ,min:50,max:100},{Subject:'arabic' ,min:50,max:100},{Subject:'english',min:40,max:80},{Subject:'religion',min:25,max:50},{Subject:'music',min:25,max:50},{Subject:'science' ,min:40 ,max:80},{Subject:'history&geography',min: 40,max: 80}]];
    
  constructor(private subService : SubjectService,
          private router : Router) { }

  get name(){
    return this.addSubject.get('Name');
  }
  get StdNO(){
    return this.addSubject.get('StdNO');
  }

  get valid(){
    return this.addSubject.invalid || this.name.value.split('/')[1]==0
  }
flag:boolean=false
saveSubject:any;
  save(){
    if(this.flag==false){
      this.subService.add(this.subject).subscribe((data)=>{
     this.router.navigate(['/studentAffaires/Student/Subject']);
   })
 }
    
  }
check(){
  this.flag=false;
  this.errormsg='';
  // check if class entered berfore or not 
  if(this.addSubject.value.Name.includes('1/')||this.addSubject.value.Name.includes('2/')||this.addSubject.value.Name.includes('3/')){
    this.saveSubject=this.allSubject[0]
  }else{this.saveSubject= this.allSubject[1]}
  this.subject = new Subject(this.addSubject.value.Id,this.addSubject.value.Name,this.addSubject.value.StdNO,this.saveSubject)
  this.subService.getAllClasses().subscribe(allclass=>{
    allclass.forEach(d=>{
         if(this.addSubject.value.Name==d.ClassNo){
           this.errormsg='This Class Is Already Exists ...';
            this.flag=true;
         }  });
   
  
    });
}
  ngOnInit() {
    this.addSubject=new FormGroup({//validation regular expression how to refuse 0 at the end ?????
      'Name' : new FormControl('',[Validators.required,
        // forbiddenNameValidator,
        Validators.pattern('(?=[1-6])(?=.*[/])(?=[1-9]).{3}')]),
      'StdNO' : new FormControl(null,[Validators.required , Validators.min(20),Validators.max(35)]),

    });

      this.subService.getAllClasses().subscribe(()=>{}, (error)=>{
        // console.log("erooor  fffffffffffffffff")
        // console.log(error)
    
        this.router.navigateByUrl("/Login")
    
      })
    }

}

