import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/_models/parent/parent';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parentlist',
  templateUrl: './parentlist.component.html',
  styleUrls: ['./parentlist.component.css']
})
export class ParentlistComponent implements OnInit {
  myHeight= window.innerHeight-150;
  parents: Parent[] = [];

  constructor(private ParentService: ParentService ,private Router:Router) { }

  deleteParent(id:number){

    this.ParentService.Delete(id).subscribe((deleted)=>{
      console.log(deleted)

      for (let i =0; i<this.parents.length; i++){
        if(this.parents[i]._id == id){
          this.parents.splice(i,1)
        }
      }
    });
  }

  ngOnInit() {

    this.ParentService.getAll().subscribe((data) => {
      this.parents = data
      console.log(data)
    }, (error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.Router.navigateByUrl("/Login")
  
    })
    console.log(this.parents.values())

  }

}

