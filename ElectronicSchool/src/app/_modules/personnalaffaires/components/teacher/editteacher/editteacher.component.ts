import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { Teachers } from 'src/app/_models/teacher/teacher';
import Subject from 'src/app/_models/teacher/subject';

@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.css']
})
export class EditteacherComponent implements OnInit {
  sub=new Subject('',[])
  subjectt=['math','arabic' ,'english','religion','music','science','history&geography'];

  teacher :Teachers = new Teachers('',0,'','',0,'',0,this.sub,null)
  addTeacherForm:FormGroup
  constructor( 
    private eacherService:TeacherService,
    private activeRouter:ActivatedRoute,
    private navRouter:Router
  ) { }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {

    this.addTeacherForm = new FormGroup({
      // fullName: new FormControl('',[Validators.required]),
      // Address: new FormControl('',[Validators.required]),
      // nationalId: new FormControl('',[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),

      // password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      // phoneNumber: new FormControl('',[Validators.required,Validators.minLength(11)]),
      // salary: new FormControl('',[Validators.required]),
      // subject: new FormControl('',[Validators.required]),
      // classes: new FormControl('',[Validators.required]),
      fullName: new FormControl('',[Validators.required,Validators.minLength(16)]),
      Address: new FormControl('',[Validators.required,Validators.minLength(12)]),
      nationalId: new FormControl('',[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),

      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.min(10000000000),Validators.max(99999999999)]),

      // phoneNumber: new FormControl('',[Validators.required,Validators.minLength(11)]),
      subject: new FormControl('',[Validators.required]),
     classes: new FormControl('',[Validators.required]),
      // DOH:new FormControl('',[Validators.required]),


    })
    this.activeRouter.params.subscribe((activLink)=>{
      // console.log(activLink.id)
            this.eacherService.getOneTeacher(activLink.id).subscribe((data)=>{
             
              // console.log(data)
              this.teacher= data
              // console.log(this.teacher);
              // console.log(data);

               this.dropdownList = data.subjects.classesName
              //  console.log(this.dropdownList)
               this.selectedItems = data.subjects.classesName

            })
    })


    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'ClassNo',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  isExist:boolean=false;
  check(){
    this.isExist=false;
    // console.log(this.invalid)
    //check if employee exist or not
    this.eacherService.getTeachers().subscribe(emps=>{
      emps.forEach(emp=>{
        if(emp.nationalId==this.teacher.nationalId){this.isExist=true;}
      });
      
    });
  }

  updateTeacher(){    
    // console.log(this.addTeacherForm)    
    // console.log(this.addTeacherForm.invalid)                                                                     
  if(!this.isExist){
    this.eacherService.updateTeacherBasicInfo(this.teacher).subscribe((data)=>{
      // console.log(data)
      this.navRouter.navigate(["/personalAffaires/Employee/Teacher"]);
    })

  }
  }
 
onItemSelect(item: any) {
  // console.log(item);
  // console.log(this.selectedItems);

}
onSelectAll(items: any) {
  console.log(items);
  // this.selectedItems= items
}
  get fullName(){
    return this.addTeacherForm.controls.fullName;
  }
  get Address(){
    return this.addTeacherForm.controls.Address;
  }
  get nationalID(){
    return this.addTeacherForm.controls.nationalId;
  }
  get password(){
    return this.addTeacherForm.controls.password;
  }
  get salary(){
    return this.addTeacherForm.controls.salary;
  }
  get phoneNumber(){
    return this.addTeacherForm.controls.phoneNumber;
  }
  get subject(){
    return this.addTeacherForm.controls.subject;
  }
  get classes(){
    return this.addTeacherForm.controls.classes;
  }
  

  inValid(){
    return  this.addTeacherForm.invalid;
    }

}