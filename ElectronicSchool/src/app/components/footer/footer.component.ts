import { Component, OnInit } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faHeart= faHeart;
  x=localStorage.getItem('login')

  constructor() { }
  logout(){
    localStorage.clear();
    localStorage.setItem('login','false');
    document.getElementById('logout').style.display='none';
    document.getElementById('login').style.display='block';
 
  }
  ngOnInit() {
    setInterval(()=>{
      this.x=localStorage.getItem('login')
    },5000)
  }

}
