import { Injectable } from '@angular/core';
import { Student } from 'src/app/_models/students/students';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl:string="http://localhost:8000/StudentAffaires/studentsPro";
  // private loginUrl="http://localhost:9090/login";

  
  // userLogin(user:object){
  //   return this.http.post(this.baseUrl,user);
  //  }

getAllstudents(){
  return this.http.get<Student[]>(this.baseUrl);
  
}

addNewStudent(std:Student){
 return this.http.post<Student>(this.baseUrl,std);

}

getStudentData(id:number){
  return this.http.get<Student>('http://localhost:8000/StudentAffaires/studentsPros/'+id);
}

updateStudentData(newstd:Student,id:number){

  return this.http.put<Student>(this.baseUrl+"/"+id,newstd);

}

getSpecificSTD(NationalID:number){
  return this.http.get<Student>(this.baseUrl+"/national/"+NationalID);
}

deleteStudent(id:number){
  return this.http.delete<Student>(this.baseUrl+"/"+id);

}






// getStudentProfile(){
//   return this.http.get<Student>(this.baseUrl+"/profile");
// }


constructor( private http:HttpClient) {}

}
