import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee/employee';
import { EmployeeService } from 'src/app/_service/employee/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  myInnerHeight= window.innerHeight-100;
  employees:Employee[]=[];
  name :string='';
  SearchWord:string=''
  constructor(private employeeService:EmployeeService) { }
  Search(){
    this.SearchWord=this.name;
    
  }
  ngOnInit() {
      this.employeeService.getAllEmplyee().subscribe(data=>this.employees=data)
  }
  deleteEmp(id){
      this.employeeService.delete(id).subscribe(()=>{this.ngOnInit()});
    
  }

}
