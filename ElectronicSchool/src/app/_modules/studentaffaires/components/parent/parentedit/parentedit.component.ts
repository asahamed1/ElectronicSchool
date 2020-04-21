import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Parent } from 'src/app/_models/parent/parent';

@Component({
  selector: 'app-parentedit',
  templateUrl: './parentedit.component.html',
  styleUrls: ['./parentedit.component.css']
})
export class ParenteditComponent implements OnInit {

  isExist=false;

  EditParent: Parent = new Parent(0,"","",0,0,"",0,0)
  check(){
    // console.log('hi')
    // console.log(this.loginForm.value)
    this.isExist=false;
    //check if employee exist or not
    this.ParentService.getAll().subscribe(ps=>{
      ps.forEach(p=>{
        if(p.nationalId==this.EditParent.nationalId){this.isExist=true;}
      });
      
    });
  }
  savaEdit() {
    if(!this.isExist){
    this.ParentService.Update(this.EditParent).subscribe((newVlaue) => {
      // console.log(newVlaue)
      // console.log(this.EditParent)
      this.Router.navigate(["/studentAffaires/Student/parent"])
    })
  }
  }
  constructor(
    private ParentService: ParentService,
    private Router: Router,
    private aroute:ActivatedRoute
    
  ) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(a=>{
      this.ParentService.getdetails(a.id).subscribe(d=>{
        console.log(d)
        this.EditParent=d;
      })
    }, (error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.Router.navigateByUrl("/Login")
  
    })
  }

}

