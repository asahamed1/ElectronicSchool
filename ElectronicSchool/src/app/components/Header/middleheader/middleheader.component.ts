import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middleheader',
  templateUrl: './middleheader.component.html',
  styleUrls: ['./middleheader.component.css']
})
export class MiddleheaderComponent implements OnInit {
  myInnerHeight= window.innerHeight-200;
  myInnerWidth= window.innerWidth-17;
  constructor() { }

  ngOnInit() {
  }

}
