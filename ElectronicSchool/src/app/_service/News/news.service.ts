import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { News } from '../../_models/News/news';
import { Observable ,throwError} from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl: string = "http://localhost:8000/admin/addNews";
  baseUrl2:string="http://localhost:8000/admin/allSchoolNews";
  baseUrl3:string="http://localhost:8000/admin/deleteNews";
   formData :any

  constructor(private http: HttpClient) { }


  //get All
  getAll() {
    return this.http.get<News[]>(this.baseUrl2);
  }

  //delete
  delete(id:number): Observable<News> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id:id
      }
    }
    return this.http.delete<News>(this.baseUrl3, options)
    
 
}
// addNews(newNews: News) {

//   return this.http.post<News>(this.baseUrl, newNews)
// }

//Add News
addNews( image: File,title:string, description: string){
     console.log(image)
     console.log(title)

     console.log(description)

  this.formData = new FormData();
  this.formData.append("title", title);
  this.formData.append("description", description);
  this.formData.append("img", image);
   console.log(this.formData)
   
  // let x = { 
  //   title:title,
  //   img:image,
  //   description:description

  // }
  // console.log(x)

  return this.http.post<News>(this.baseUrl, this.formData)
   
}

}
