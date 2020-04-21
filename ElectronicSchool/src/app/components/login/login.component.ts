import { Component, OnInit } from '@angular/core';
import { faLock,faUser } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser =faUser;
  faLock = faLock;
  User:string;
  loginuser:FormGroup;
  errMsg:string='';
  options=["EmployeeAffaires","StudentAffaires","Student","Teacher","Parent","Control"];
  optionSelected: any;
category=['EmployeeAffaires','StudentAffaires','Student','Teacher','Parent','Control']
//  getRadioValue(event) {
//    // console.log(event.target.value);
//    this.User=event.target.value;
//  }
onOptionsSelected(event){
  console.log(event.target.value); //option value will be sent as event
  this.User=event.target.value;
 }
 
 formValid(){
   return this.loginuser.invalid;

  }
// get User(){
//   return this.loginuser.get("user").value;
// }
get nationalId(){
 return this.loginuser.get("NationalID");

}

get password(){
 return this.loginuser.get("Password");

}

 constructor( private loginservice:LoginService , private router:Router) { 
  
 }

 login(){
   console.log(this.User)
  //  console.log() this.loginuser.value
   this.errMsg='';
   if(this.nationalId.value=='12345678912345'&&this.password.value=='12345678'){
    localStorage.setItem('login','true');
    this.router.navigateByUrl('/admin')
    }
else if(this.User=="Student"){
 
      this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
        // console.log(a['student']['_id']);
        // console.log(a)
        if(a['student']==null)this.errMsg='Password Or National ID Incorrect ...';
        else {
         localStorage.setItem('token', a['token']);
         localStorage.setItem('login','true');
 
         localStorage.setItem('id',JSON.stringify({id:a['student']['_id']}))
         this.router.navigateByUrl("/Students");
          
          }
      })
    }
   else if(this.User=="Teacher"){
      this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
        console.log(a);
        if(a['teacher']==null)this.errMsg='Password Or National ID Incorrect ...';
        else {
          localStorage.setItem('token', a['token']);
          localStorage.setItem('login','true');

         localStorage.setItem('id',JSON.stringify({id:a['teacher']['_id']}))
         this.router.navigateByUrl("/Teachers");
 
        
         } 
 
 
      })
    }
    else if(this.User=="Parent"){
      this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
        // console.log(a);
        if(a['parent']==null)this.errMsg='Password Or National ID Incorrect ...';
        else
        {
         localStorage.setItem('login','true');
         localStorage.setItem('token', a['token']);
 
         localStorage.setItem('id',JSON.stringify({id:a['parent']['_id']}))
         this.router.navigateByUrl("/Parents");
 
         } 
 
 
      })
    }
    else if(this.User=="Control"){
      this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
        console.log(a);
        if(a['empControl']==null)this.errMsg='Password Or National ID Incorrect ...';
        else{
         localStorage.setItem('token', a['token']);
         localStorage.setItem('login','true');
 
          localStorage.setItem('id',JSON.stringify({id:a['empControl']['_id']}))
           this.router.navigateByUrl("/control");
 
         }  
        
 
 
      })
    }
    else if(this.User=="StudentAffaires"){
      this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
        console.log(a);
        if(a['empStudentAffairs']==null)this.errMsg='Password Or National ID Incorrect ...';
        else{
         localStorage.setItem('token', a['token']);
         localStorage.setItem('login','true');
 
          localStorage.setItem('id',JSON.stringify({id:a['empStudentAffairs']['_id']}))
           this.router.navigateByUrl("/studentAffaires");
 
         }  
       
 
 
      })
    }
    else if(this.User=="EmployeeAffaires"){
      this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
        // console.log(a);
        if(a['empEmployeeAffaires']==null)this.errMsg='Password Or National ID Incorrect ...';
        else {
        //  console.log(a);
        //  console.log(a['token'])
         localStorage.setItem('token', a['token']);
         localStorage.setItem('login','true');
         localStorage.setItem('id',JSON.stringify({id:a['empEmployeeAffaires']['_id']}))
         this.router.navigateByUrl("/personalAffaires");
 
         } 
 
 
      })
    }
 
 
 
  }
 
  ngOnInit():void {
    this.loginuser=new FormGroup({
      "NationalID":new FormControl("",[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),
      "Password":new FormControl("",[Validators.required,Validators.minLength(8)]),
      "user":new FormControl('-1')
     
    });
 
   
  }
 
 }
 