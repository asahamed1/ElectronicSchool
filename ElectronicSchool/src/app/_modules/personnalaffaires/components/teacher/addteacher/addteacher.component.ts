import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/_models/teacher/teacher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { Router } from '@angular/router';
import Subject from 'src/app/_models/teacher/subject';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  addTeacherForm: FormGroup
  classessss :String[]
  clasess: string[] = ['one', 'two', 'three'];
  // default: string = '';
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  subjectt=['math','arabic' ,'english','religion','music','science','history&geography'];

  teacherObject: Teachers
  constructor(private  TecherserviceService:TeacherService ,private navigateRouter:Router) { }

  ngOnInit() {
    this.addTeacherForm = new FormGroup({
      fullName: new FormControl('',[Validators.required,Validators.minLength(16)]),
      Address: new FormControl('',[Validators.required,Validators.minLength(12)]),
      nationalId: new FormControl('',[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),

      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.min(10000000000),Validators.max(99999999999)]),

      // phoneNumber: new FormControl('',[Validators.required,Validators.minLength(11)]),
      salary: new FormControl('',[Validators.required,]),
      subject: new FormControl('',[Validators.required]),
     classes: new FormControl('',[Validators.required]),
      DOH:new FormControl('',[Validators.required]),
         

    })
    this.TecherserviceService.getAllClasses().subscribe((data)=>{
      // console.log(data)
   
    this.dropdownList = data;
    // console.log(this.dropdownList)
  })
    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
  
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
  onItemSelect(item: any) {
    // console.log(item);
    // console.log(this.selectedItems);

  }
  onSelectAll(items: any) {
    // console.log(items);
    // this.selectedItems= items
  }
  // onItemDeSelect(item:any){
  //          for(let i =0; i<this.selectedItems.length; i++){
  //            if(this.selectedItems[i].item_id==item.item_id){
  //              this.selectedItems.splice(i,1)
  //            }
  //          }
  //          console.log(this.selectedItems)
  // }
  
  
 get  fullName(){
    return this.addTeacherForm.get("fullName")

  }
 get Address(){
    return this.addTeacherForm.get("Address")

  }
  get nationalId(){
    return this.addTeacherForm.get("nationalId")

  }
  get userName(){
    return this.addTeacherForm.get("userName")

  }
  get password(){
    return this.addTeacherForm.get("password")

  }
  get phoneNumber(){
    return this.addTeacherForm.get("phoneNumber")

  }
  get salary(){
    return this.addTeacherForm.get("salary")

  }
  get subject(){
    return this.addTeacherForm.get("subject")

  }
  isExist:boolean=false;
  check(){
    this.isExist=false;
    // console.log(this.invalid)
    //check if employee exist or not
    this.TecherserviceService.getTeachers().subscribe(emps=>{
      emps.forEach(emp=>{
        if(emp.nationalId==this.addTeacherForm.get('nationalId').value){this.isExist=true;}
      });
      
    });
  }

  // public subjects: Subject[] 
  addTeacher() {
    // console.log(this.addTeacherForm)
    // console.log(this.addTeacherForm.value)
  let fullName = this.addTeacherForm.value.fullName;
  let userName = this.addTeacherForm.value.userName;

  let password = this.addTeacherForm.value.password;

  let Address = this.addTeacherForm.value.Address;

  let nationalId = this.addTeacherForm.value.nationalId;
  let phoneNumber = this.addTeacherForm.value.phoneNumber;


  let salary = this.addTeacherForm.value.salary;
  let DOH = this.addTeacherForm.value.DOH;

  let subjects =new Subject(this.addTeacherForm.value.subject,
    this.selectedItems)
    this.teacherObject =
     new Teachers(fullName,userName,password,Address,phoneNumber,nationalId,salary,subjects,DOH)
  // console.log(this.teacherObject)
 if(!this.isExist){
  this.TecherserviceService.getCheckTeacher(this.addTeacherForm.value.nationalId).subscribe((emp)=>{
    // console.log(emp)
    if(emp==null){
      this.TecherserviceService.addTeacher(this.teacherObject).subscribe((data)=>{
        // console.log(data)
        // console.log(this.addTeacherForm)
       this.navigateRouter.navigate(["/personalAffaires/Employee/Teacher"])
 })
    }else{
      
    }
  })
 }
  

  
  }
 inValid(){
   return this.addTeacherForm.invalid;
 }
}
