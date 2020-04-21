import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/_service/employee/employee.service';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css'],
  providers: [DatePipe]
})
export class EmployeeeditComponent implements OnInit {

  public state : string;
  editEmployee : FormGroup;
  isExist:boolean=false;
  constructor(private aroute:ActivatedRoute,private dataPipe:DatePipe,
    private employeeService:EmployeeService,private router :Router) { }

  get NationalID(){
    return this.editEmployee.get('NationalID');
  }
  get Salary(){
    return this.editEmployee.get('Salary');
  }
  get address(){
    return this.editEmployee.get('Address');
  }
  get PhoneNumber(){
    return this.editEmployee.get('PhoneNumber');
  }
  get DOB(){
    return this.editEmployee.get('DOB');
  }
  get DOJ(){
    return this.editEmployee.get('DOJ');
  }
  get fullName(){
    return this.editEmployee.get('FullName');
  }
  get faculty(){
    return this.editEmployee.get('Faculty');
  }
  get Password(){
    return this.editEmployee.get('Password');
  }
//  valid(){
//     console.log(this.valid())
//     return   this.editEmployee.invalid;
//   }
check(){
  this.isExist=false;
  // console.log(this.invalid)
  //check if employee exist or not
  this.employeeService.getAllEmplyee().subscribe(emps=>{
    emps.forEach(emp=>{
      if(emp.NationalID==this.editEmployee.get('NationalID').value){this.isExist=true;}
    });
    
  });
}
  save(){
    if(!this.isExist){
      if(this.editEmployee.valid){
        this.employeeService.update(this.editEmployee.value).subscribe((data)=>{
          this.router.navigate(['/personalAffaires/Employee/List']);
        })
      }
      else{
        // alert('please, Check Validation Instructions ...')
      }
    }
  }


  ngOnInit() {
    this.aroute.params.subscribe(a=>{
      this.state = a.state;
      this.employeeService.getOneEmployee(a.id).subscribe(data=>{
        let DOB = this.dataPipe.transform(data.DOB,'yyyy-MM-dd');
        let DOJ = this.dataPipe.transform(data.DOJ,'yyyy-MM-dd');

        this.editEmployee.setValue({'FullName':data.FullName,'Password':data.Password,'NationalID':data.NationalID,
      'Salary':data.Salary,'Address':data.Address,'PhoneNumber':data.PhoneNumber,'DOB':DOB,'DOJ':DOJ,'Faculty':data.Faculty})
      })

    });
    this.editEmployee=new FormGroup({
      'FullName' : new FormControl(null,[Validators.required,Validators.minLength(16),Validators.maxLength(30)]),
      'Password' : new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      'NationalID' : new FormControl(null,[Validators.required ,Validators.min(10000000000000),Validators.max(99999999999999)]),
      'Salary' : new FormControl(null,[Validators.required]),
      'Address' : new FormControl(null,[Validators.required]),
      'PhoneNumber' : new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
      'DOB' : new FormControl(null,[Validators.required]),
      'DOJ' : new FormControl(null,[Validators.required]),
      'Faculty' : new FormControl(null,[Validators.required,Validators.minLength(16),Validators.maxLength(30)]),

    });
  }
}
