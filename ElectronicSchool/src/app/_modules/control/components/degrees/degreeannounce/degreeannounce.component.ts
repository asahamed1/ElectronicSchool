import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/_service/control/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-degreeannounce',
  templateUrl: './degreeannounce.component.html',
  styleUrls: ['./degreeannounce.component.css']
})
export class DegreeannounceComponent implements OnInit {

  statee:boolean[]=[false,false,true,true,false,false];
  Years :string[]=['First Primary','Second Primary','Third Primary','Forth Primary','Fifth Primary','Sixth Primary'];
  constructor(private ControlService:ControlService,private route:Router) { }
  change(index){
    //confirm button
    console.log(index)
    this.statee[index]=! this.statee[index];
    this.ControlService.saveState(this.statee).subscribe(data=>{
      })
  }
  ngOnInit() {
    this.ControlService.getState().subscribe(data=>{
      
      this.statee=data['state'];
      // console.log(this.statee)
    })
    this.ControlService.getAllStudent().subscribe(()=>{},(error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.route.navigateByUrl("/Login")
  
    })
  }

}
