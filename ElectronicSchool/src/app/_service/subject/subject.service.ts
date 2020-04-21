import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject } from 'src/app/_models/subject/subject';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private URL:string ='http://localhost:8000/StudentAffaires/subject';
  constructor(private http : HttpClient) {}

  add(NewClass:Subject){
    return this.http.post<Subject>(this.URL,NewClass);
  }

  getOneClass(id){
    return this.http.get<Subject>(this.URL+'/'+id);
  }
  getAllClasses(){
    return this.http.get<Subject[]>(this.URL);
  }

  update(Class:Subject){
    return this.http.put(this.URL,Class);
  }
  setTable(Table,_id){
    return this.http.put(this.URL+'/Table',{Table:Table,_id:_id})
  }
  getTeachers(){
    return this.http.get<any[]>('http://localhost:8000/teachers/list')
  }
  delete(_id:Number){
    const options={
      headers:new HttpHeaders({'Content-Type':'application/json'}),
      body :{
        _id:_id
      }
    }
    return this.http.delete<Subject>(this.URL,options);
  }

}

