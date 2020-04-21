// import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpHandler, HttpEvent, HttpRequest, HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';

// @Injectable({
//   // providedIn: 'root'
// })
@Injectable()

export class TokenService implements HttpInterceptor {

  constructor(private http: HttpClient){
    
  }
  // : Observable<HttpEvent<any>>
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //console.log(`AddTokenInterceptor - ${req.url}`);
    let userToken= localStorage.getItem('token');
    if(userToken){
     req = req.clone({
      setHeaders:{
       // Authorization 
       token : `${localStorage.getItem("token")}`
      }
    });
    

    console.log("hello from intercepter")
    console.log(req)
}
    return next.handle(req);
  }
}
