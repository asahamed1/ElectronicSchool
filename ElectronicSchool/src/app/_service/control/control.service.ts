import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllStudent } from 'src/app/_models/control/allsubject';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private URL:string ='http://localhost:8000/control';
  constructor(private http:HttpClient) { }
  getAllStudent(){
    return this.http.get<AllStudent[]>(this.URL+"/AllStudent");
  }
  getallSubjectData(name){
    return this.http.get<any[]>(this.URL+'/AddDegrees/'+name)
    }
  update(degress){
    return this.http.put<any>(this.URL+'/AddDegrees',degress)
  }
  saveState(state){
    return this.http.put<any[]>(this.URL+'/State',{state:state});

  }
  getState(){
    return this.http.get<any[]>(this.URL+'/State');
  }
}
