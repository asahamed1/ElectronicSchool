import { Component, OnInit } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ElectronicSchool';
  faHeart=faHeart;
  x=localStorage.getItem('login')
 constructor(){
   
 }
 logout(){
   localStorage.clear();
   localStorage.setItem('login','false');
   document.getElementById('logout').style.display='none';
   document.getElementById('login').style.display='block';

 }
 ngOnInit(){
  
// console.log(this.x)
setInterval(()=>{
  this.x=localStorage.getItem('login')
},5000)
 }
}
