import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/_service/Activity/activity.service';
import { Activity} from 'src/app/_models/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

  SchoolActivity: Activity[]=[];
  imageSOurse:string
  constructor(
    public NewsServicesService:ActivityService) {}
    // this.getUsers();
    deletActivity(id:number){
          this.NewsServicesService.delete(id).subscribe((deleted)=>{
            console.log(deleted)
            for (let i =0; i<this.SchoolActivity.length; i++){
              if(this.SchoolActivity[i]._id == id){
                this.SchoolActivity.splice(i,1)
              }
            }
          })
      //console.log(id)
        }
      
  ngOnInit() {
    this.NewsServicesService.getAll().subscribe((res) => {
      this.SchoolActivity = res;
      console.log( this.SchoolActivity)

    })
   } 
}



//   constructor(private ActivityService: ActivityService ,private Router:Router) { }

//   deletActivity(id:number){
//     this.ActivityService.delete(id).subscribe((deleted)=>{
//       console.log(deleted)
//       for (let i =0; i<this.SchoolActivity.length; i++){
//         if(this.SchoolActivity[i]._id == id){
//           this.SchoolActivity.splice(i,1)
//         }
//       }
//     })
// console.log(id)
//   }

//   ngOnInit() {

//     this.ActivityService.getAll().subscribe((data) => {
//       this.SchoolActivity= data
//       console.log(data)
//     })
//     console.log(this.SchoolActivity.values())

//   }

// }