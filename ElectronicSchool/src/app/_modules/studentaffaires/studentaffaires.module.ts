import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from'@angular/forms'

import { StudentaffairesRoutingModule } from './studentaffaires-routing.module';
import { ParentaddComponent } from './components/parent/parentadd/parentadd.component';
import { ParentlistComponent } from './components/parent/parentlist/parentlist.component';
import { StudentlistComponent } from './components/student/studentlist/studentlist.component';
import { StudentaddComponent } from './components/student/studentadd/studentadd.component';
import { StudenteditComponent } from './components/student/studentedit/studentedit.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ParenteditComponent } from './components/parent/parentedit/parentedit.component';
import { ClasslistComponent } from './components/table/classlist/classlist.component';
import { ClasseditComponent } from './components/table/classedit/classedit.component';
import { ClasseaddComponent } from './components/table/classeadd/classeadd.component';
import { TableComponent } from './components/table/table/table.component';


@NgModule({
  declarations: [ ParentaddComponent,TableComponent, ParentlistComponent, StudentlistComponent, StudentaddComponent, StudenteditComponent,HomeComponent, MainComponent, MainnavComponent, ProfileComponent, ParenteditComponent, ClasslistComponent, ClasseditComponent, ClasseaddComponent],
  imports: [
    CommonModule,
    StudentaffairesRoutingModule,ReactiveFormsModule,FormsModule,
  ]
})
export class StudentaffairesModule { }
