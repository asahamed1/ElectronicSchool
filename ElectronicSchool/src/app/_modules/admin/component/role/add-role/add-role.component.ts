import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EmployeeService} from '../../../../../_service/employee/employee.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
roleForm :FormGroup;
employeeList:any
  constructor(private employeeService:EmployeeService ,private route:Router) { }
              searchWord=''


              invalid(){
              return  this.roleForm.invalid;
              }
  get nationalId(){
    return this.roleForm.get('nationalId');
  }
  ngOnInit() {
    this.roleForm = new FormGroup({
      search: new FormControl(''),
      nationalId: new FormControl('',[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),
      rol: new FormControl('',[Validators.required]),
      })
    this.employeeService.getAllEmplyee().subscribe((data)=>{

     this.employeeList = data
    //  console.log(this.employeeList)
    })
  }
  addRole(){
    // console.log(this.roleForm.value)
     let obj = {nationalId:this.roleForm.value.nationalId,
      role:this.roleForm.value.rol}
      console.log(obj)
      this.employeeService.updateRole(obj).subscribe((result)=>{
        this.ngOnInit();
           console.log(result)
      })
   
  }




}