import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:8000/login";

  userLogin(user:object){
    console.log(user);
   return this.http.post(this.baseUrl,user);//,{withCredentials: true }
  }
  
  constructor( private http:HttpClient) { }
}
