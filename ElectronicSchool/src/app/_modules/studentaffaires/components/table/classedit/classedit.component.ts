import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'src/app/_models/subject/subject';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/_service/subject/subject.service';

@Component({
  selector: 'app-classedit',
  templateUrl: './classedit.component.html',
  styleUrls: ['./classedit.component.css']
})
export class ClasseditComponent implements OnInit {
  editSubject:FormGroup;
  errormsg:string='';
  allSubject=[[{Subject:'math' ,min:50,max:100},{Subject:'arabic' ,min:50,max:100},{Subject:'english',min:40,max:80},{Subject:'religion',min:25,max:50},{Subject:'music',min:25,max:50}],
  [{Subject:'math' ,min:50,max:100},{Subject:'arabic' ,min:50,max:100},{Subject:'english',min:40,max:80},{Subject:'religion',min:25,max:50},{Subject:'music',min:25,max:50},{Subject:'science' ,min:40 ,max:80},{Subject:'history&geography',min: 40,max: 80}]];
  flag:boolean=false
saveSubject:any;
  subject : Subject  = new Subject(0,'',0,[]);
  constructor(private router:Router , private aroute:ActivatedRoute,
      private subService:SubjectService) { }

  get name(){
    return this.editSubject.get('Name');
  }
  get StdNO(){
    return this.editSubject.get('StdNO');
  }
  
  get valid(){
    return this.editSubject.invalid 
  }

  save(){
    if(this.flag==false){

    let sub = new Subject(this.subject._id,this.editSubject.get('Name').value,this.editSubject.get('StdNO').value,[]) 
    this.subService.update(sub).subscribe((data)=>{
      this.router.navigate(['/studentAffaires/Student/Subject']);
    })
  }
  }
  check(){
    this.flag=false;
    this.errormsg='';
    // check if class entered berfore or not 
    if(this.editSubject.value.Name.includes('1/')||this.editSubject.value.Name.includes('2/')||this.editSubject.value.Name.includes('3/')){
      this.saveSubject=this.allSubject[0]
    }else{this.saveSubject= this.allSubject[1]}
    this.subject = new Subject(this.subject._id,this.editSubject.value.Name,this.editSubject.value.StdNO,this.saveSubject)
    this.subService.getAllClasses().subscribe(allclass=>{
      allclass.forEach(d=>{
           if(this.editSubject.value.Name==d.ClassNo){
             this.errormsg='This Class Is Already Exists ...';
              this.flag=true;
           }  });
     
    
      });
  }
  
  
  ngOnInit() {
    this.aroute.params.subscribe(a=>{
      this.subService.getOneClass(a.id).subscribe(data=>{this.subject=data[0];
      this.editSubject.setValue({'Name':data[0].ClassNo,'StdNO':data[0].StudentNo})
        
      })
    }, (error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.router.navigateByUrl("/Login")
  
    })
    this.editSubject=new FormGroup({
      'Name' : new FormControl('',[Validators.required,Validators.pattern('(?=[1-6])(?=.*[/])(?=[1-9]).{3}')]),
      'StdNO': new FormControl('',[Validators.required, Validators.min(20),Validators.max(35)]),

    });
  }

}
