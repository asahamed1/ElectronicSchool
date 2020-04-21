import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatTableModule} from '@angular/material/table'


import { PersonnalaffairesRoutingModule } from './personnalaffaires-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EmployeelistComponent } from './components/Employee/employeelist/employeelist.component';
import { EmployeeaddComponent } from './components/Employee/employeeadd/employeeadd.component';
import { MainnavbarComponent } from './components/mainnavbar/mainnavbar.component';
import { EmployeeeditComponent } from './components/Employee/employeeedit/employeeedit.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditteacherComponent } from './components/teacher/editteacher/editteacher.component';
import { AddteacherComponent } from './components/teacher/addteacher/addteacher.component';
import { ListteacherComponent } from './components/teacher/listteacher/listteacher.component';
import { EditsalaryComponent } from './components/teacher/editsalary/editsalary.component';
import { TeacherdetailsComponent } from './components/teacher/teacherdetails/teacherdetails.component';


@NgModule({
  declarations: [HomeComponent, EmployeelistComponent,TeacherdetailsComponent, EmployeeaddComponent, MainnavbarComponent, EmployeeeditComponent, MainComponent, ProfileComponent, EditteacherComponent, AddteacherComponent, ListteacherComponent, EditsalaryComponent],
  imports: [
    CommonModule,
    PersonnalaffairesRoutingModule,
    ReactiveFormsModule,FormsModule,NgMultiSelectDropDownModule,
//     MatDialogModule,
//     MatButtonModule,
// MatIconModule, 
// MatTableModule

  ]
})
export class PersonnalaffairesModule { }
