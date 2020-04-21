import { Injectable } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { MatconfirmdialogComponent } from 'src/app/components/matconfirmdialog/matconfirmdialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(


    // private matdialog:MatDialog
  ) { }
  openconfirmdialog(msg){
  //  return this.matdialog.open(MatconfirmdialogComponent,{
  //     width:'400px',
  //     panelClass:'confirm-dialog-container',
  //     disableClose:true,
  //     position:{
  //         top:"20px"
  //     },
  //     data:{
  //       message:msg
  //     }
  //   })
  }
}
