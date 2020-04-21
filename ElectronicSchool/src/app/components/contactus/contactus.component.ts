import { Component, OnInit } from '@angular/core';
import { faHome,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  faHome=faHome;
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
