import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Teachers } from 'src/app/_models/teacher/teacher';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) {  }
  getTeachers(){
      return this.http.get<Teachers[]>("http://localhost:8000/teachers/list")
  }
  addTeacher(teacher){
      return this.http.post("http://localhost:8000/teachers/add",teacher)

  }
getOneTeacher(id){
  return this.http.get<Teachers>("http://localhost:8000/teachers/edit/"+id)

}
updateTeacherBasicInfo(teacher){
  return this.http.put("http://localhost:8000/teachers/edit",teacher)

}

getCheckTeacher(nationalID){
  return this.http.get("http://localhost:8000/teachers/checkEmployeeExist/"+nationalID)
}

updateTeacherSalary(teacher){
  console.log(teacher)
  return this.http.put("http://localhost:8000/teachers/editsalray",teacher)
}


deleteTeacher(id){
  return this.http.delete("http://localhost:8000/teachers/delete/"+id)
}
getAllClasses(){
  return this.http.get<any[]>("http://localhost:8000/StudentAffaires/subject");

}
  getTeacherClasses(arr){
    console.log(arr)
    return this.http.post("http://localhost:8000/teachers/teacherTable",arr);

  }
}
