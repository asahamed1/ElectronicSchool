import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-for-each-department',
  templateUrl: './main-page-for-each-department.component.html',
  styleUrls: ['./main-page-for-each-department.component.css']
})
export class MainPageForEachDepartmentComponent implements OnInit {
  myInnerHeight= window.innerHeight;
  myInnerWidth= window.innerWidth-17;
   mainFun =['app1','app2','app3']

  constructor() { }

  ngOnInit() {
  }

}
