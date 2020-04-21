import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../../_models/activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  baseUrl: string = "http://localhost:8000/admin/allActivity";
  baseUrl2:string="http://localhost:8000/admin/addActivity";
  baseUrl3:string="http://localhost:8000/admin/deletActivity";
  formData :any
  
  addActivity(image: File,title:string, description: string) {
    this.formData = new FormData();
  this.formData.append("title", title);
  this.formData.append("description", description);
  this.formData.append("img", image);
   console.log(this.formData)

    //return this.http.post<Activity>(this.baseUrl, newActivity)
    return this.http.post<Activity>(this.baseUrl2, this.formData)
  }

  getAll() {
    return this.http.get<Activity[]>(this.baseUrl);
  }

  delete(id:number): Observable<Activity> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id:id
      }
    }
    return this.http.delete<Activity>(this.baseUrl3, options)
    
 
}


  constructor(private http: HttpClient) { }
}
