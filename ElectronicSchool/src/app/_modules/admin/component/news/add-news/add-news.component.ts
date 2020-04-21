import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import {NewsService} from 'src/app/_service/News/news.service';
import { News } from 'src/app/_models/News/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  preview: string;
  addNews: FormGroup;
  percentDone: any = 0;
  users = [];
  InnerHeight=window.innerHeight-150
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public NewsService: NewsService
  ) {
    // Reactive Form
    this.addNews = this.fb.group({
      title: [''],
      description:[''],
      img: [null]
    })
  }

  ngOnInit() { }

  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addNews.patchValue({
      img: file
    });
    console.log(event)
    // this.addNews.get('img').updateValueAndValidity()

    // // File Preview
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.preview = reader.result as string;
    // }
    // reader.readAsDataURL(file)
  }


  save() {
    console.log(this.addNews.value)
    this.NewsService.addNews(
      this.addNews.value.img,
    this.addNews.value.title,
    this.addNews.value.description,
      
    ).subscribe((a) => {
      console.log(a)
      // event: HttpEvent<any>
      // switch (event.type) {
      //   case HttpEventType.Sent:
      //     console.log('Request has been made!');
      //     break;
      //   case HttpEventType.ResponseHeader:
      //     console.log('Response header has been received!');
      //     break;
      //   case HttpEventType.UploadProgress:
      //     this.percentDone = Math.round(event.loaded / event.total * 100);
      //     console.log(`Uploaded! ${this.percentDone}%`);
      //     break;
      //   case HttpEventType.Response:
      //     console.log('User successfully created!', event.body);
      //     this.percentDone = false;
      //     this.router.navigate(['users-list'])
      // }
    })
  }

}













//   addNews:FormGroup
//   imagName:String
//   onFileChanged(event) {
//       this.imagName=event.target.files[0].name ;
//     }
//   save() {
//     console.log(this.addNews)
//     this.ParentService.addNews(
// {
//   "title":this.addNews.value.title,
//   "description":this.addNews.value.description,
//   "img":this.imagName
// }
//     ).subscribe((newNews) => {
//       console.log(newNews)
//     })
//   }

//   constructor(private router: Router, private ParentService: NewsServicesService) { }

//   get img() {
//     return this.addNews.get('img')
//   }
//   get title() {
//     return this.addNews.get('title')
//   }
//   get description() {
//     return this.addNews.get('description')
//   }
//   ngOnInit(){
//     this.addNews = new FormGroup({
//       'img': new FormControl('', Validators.required),
//       'title': new FormControl('', Validators.required),
//       'description': new FormControl('', Validators.required),
//   })
//   }
// }
