import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/_models/employee/employee';
import { EmployeeService } from 'src/app/_service/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent implements OnInit {
  isExist:boolean=false;
  addEmployee : FormGroup;
  newEmployee : Employee = new Employee(0,'',0,'',0,'',0,null,null,'');
  constructor(private employeeService:EmployeeService,private router :Router) { }

  get NationalID(){
    return this.addEmployee.get('NationalID');
  }
  get Salary(){
    return this.addEmployee.get('Salary');
  }
  get address(){
    return this.addEmployee.get('Address');
  }
  get PhoneNumber(){
    
    return this.addEmployee.get('PhoneNumber');
  }
  get DOB(){
    return this.addEmployee.get('DOB');
  }
  get DOJ(){
    return this.addEmployee.get('DOJ');
  }
  get fullName(){
    return this.addEmployee.get('FullName');
  }
  get faculty(){
    return this.addEmployee.get('Faculty');
  }
  
  get Password(){
    return this.addEmployee.get('Password');
  }
  get invalid(){
    return this.addEmployee.invalid 
  }
check(){
  this.isExist=false;
  // console.log(this.invalid)
  //check if employee exist or not
  this.employeeService.getAllEmplyee().subscribe(emps=>{
    emps.forEach(emp=>{
      if(emp.NationalID==this.addEmployee.get('NationalID').value){this.isExist=true;}
    });
    
  });
}
  save(){
   
    if(!this.isExist){

      this.employeeService.add(this.addEmployee.value).subscribe((data)=>{
        this.router.navigate(['/personalAffaires/Employee/List']);
      })
    }
   
  }
  ngOnInit() {
    
    this.addEmployee=new FormGroup({
      'FullName' : new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(30)]),
      'Password' : new FormControl('',[Validators.required,Validators.minLength(8)]),
      'NationalID' : new FormControl('',[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),
      'Salary' : new FormControl('',[Validators.required]),
      'Address' : new FormControl('',[Validators.required]),
      'PhoneNumber' : new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
      'DOB' : new FormControl(null,[Validators.required]),
      'DOJ' : new FormControl(null,[Validators.required]),
      'Faculty' : new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(30)]),

    });
  }
}
