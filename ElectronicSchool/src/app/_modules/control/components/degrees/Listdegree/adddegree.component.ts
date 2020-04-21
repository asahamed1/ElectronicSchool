import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/_service/control/control.service';
import { AllStudent } from 'src/app/_models/control/allsubject';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adddegree',
  templateUrl: './adddegree.component.html',
  styleUrls: ['./adddegree.component.css']
})
export class AdddegreeComponent implements OnInit {
  allStd:AllStudent[]=[];
  nameSearch:string='';
  resultSearch:string='';
  classSearch:string='';
  resultClass:string='';
  id:number;
  constructor(private ControlService :ControlService,private route :Router, private aroute :ActivatedRoute) { }
  SearchName(){
    this.resultSearch=this.nameSearch;
  }
  SearchClasss(){
    this.resultClass=this.classSearch;
  }
  ngOnInit() {
    this.aroute.params.subscribe(a=>this.id=a['id'])
    this.ControlService.getAllStudent().subscribe(data=>{this.allStd=data}
      ,(error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.route.navigateByUrl("/Login")
  
    })
  }

}
