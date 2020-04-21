import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/_service/Activity/activity.service';

@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css']
})
export class AddActivitiesComponent implements OnInit {
  innerHeight=window.innerHeight-100;
  preview: string;
  addActivity:FormGroup
  percentDone: any = 0;
  users = [];

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public ActivityService: ActivityService
  ) {
    // Reactive Form
    this.addActivity = this.fb.group({
      title: [''],
      description:[''],
      img: [null]
    })
  }
  ngOnInit() { }
   // Image Preview
   uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addActivity.patchValue({
      img: file
    });
    console.log(event)
  }
    save() {
      console.log(this.addActivity.value)
      this.ActivityService.addActivity(
        this.addActivity.value.img,
      this.addActivity.value.title,
      this.addActivity.value.description,
        
      ).subscribe((a) => {
        console.log(a)
      })
    }
  
  }
//   onFileChanged(event) {
//       this.imagName=event.target.files[0].name ;
//     }
//     save() {
//       console.log(this.addActivity)
//       this.ActivityService.addActivity(
//   {
//     "title":this.addActivity.value.title,
//     "description":this.addActivity.value.description,
//     "img":this.imagName
//   }
//       ).subscribe((newActivity) => {
//         console.log(newActivity)
//       })
//     }
//   constructor(private router: Router, private ActivityService: ActivityService) { }

//   get img() {
//     return this.addActivity.get('img')
//   }
//   get title() {
//     return this.addActivity.get('title')
//   }
//   get description() {
//     return this.addActivity.get('description')
//   }
//   ngOnInit(){
//     this.addActivity = new FormGroup({
//       'img': new FormControl('', Validators.required),
//       'title': new FormControl('', Validators.required),
//       'description': new FormControl('', Validators.required),
//   })
//   }
// }

