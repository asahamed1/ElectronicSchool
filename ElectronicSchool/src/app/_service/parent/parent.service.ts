import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parent } from 'src/app/_models/parent/parent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  baseUrl: string = "http://localhost:8000/StudentAffaires/parents";

  getAll() {
    return this.http.get<Parent[]>(this.baseUrl)
  }

  Delete(id: number): Observable<Parent> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: id,
        name: 'tttt'
      }
    }

    return this.http.delete<Parent>(this.baseUrl, options)



  }
  Update(parent:Parent){
    return this.http.put<Parent>(this.baseUrl,parent);
  }

  addParent(newParent: Parent) {

    return this.http.post(this.baseUrl, newParent)
  }


  getdetails(id:number){
    console.log(id)
    return this.http.get(this.baseUrl+"/details/"+id);
  }
  
  constructor(private http: HttpClient) { }
}
