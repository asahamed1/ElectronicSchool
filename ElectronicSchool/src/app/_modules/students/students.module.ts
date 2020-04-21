import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import { StudentsRoutingModule } from './students-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DegreeComponent } from './components/degree/degree.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [HomeComponent, MainComponent, MainnavComponent, ProfileComponent, DegreeComponent, TableComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,FormsModule,
    ReactiveFormsModule, 

  ]
})
export class StudentsModule { }
