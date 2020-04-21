import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.params.subscribe(a=>console.log(a))
  }

}
