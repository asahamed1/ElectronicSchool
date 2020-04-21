import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Employee } from '../../_models/employee/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL:string ='http://localhost:8000/employeeAffaires/employee'
  constructor(private http:HttpClient) { }
  getAllEmplyee(){
    return this.http.get<Employee[]>(this.URL);
  }
  add(newEmployee){
    return this.http.post<Employee>(this.URL,newEmployee);
  }
  update(Employees:Employee){

    return this.http.put<Employee>(this.URL,Employees);
  }
  getOneEmployee(id:number){
    return this.http.get<Employee>(this.URL+'/'+id);
  }
  delete(_id:number){
    const options={
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      body :{
        _id:_id
      }
    }
    return this.http.delete<Employee>(this.URL,options);
  }



  // add role 
  updateRole(obj){
    return this.http.put("http://localhost:8000/admin/addRole",obj)

   }
}
