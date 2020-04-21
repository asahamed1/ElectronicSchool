import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {EmployeeaddComponent} from './components/Employee/employeeadd/employeeadd.component';
import { EmployeeeditComponent} from './components/Employee/employeeedit/employeeedit.component';
import {EmployeelistComponent } from './components/Employee/employeelist/employeelist.component';
import {MainnavbarComponent} from './components/mainnavbar/mainnavbar.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component'
import { ListteacherComponent } from './components/teacher/listteacher/listteacher.component';
import { AddteacherComponent } from './components/teacher/addteacher/addteacher.component';
import { EditteacherComponent } from './components/teacher/editteacher/editteacher.component';
import { TeacherdetailsComponent } from './components/teacher/teacherdetails/teacherdetails.component';
import { EditsalaryComponent } from './components/teacher/editsalary/editsalary.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
  
    {path:'Employee',component:MainnavbarComponent,children:[
      {path:'Profile',component:ProfileComponent},
      {path:'List',component:EmployeelistComponent},
      {path:'Teacher',component:ListteacherComponent},
      {path:'Details/:id',component:TeacherdetailsComponent},
      {path:'TeacherAdd',component:AddteacherComponent},
      {path:'TeacherEdit/:id',component:EditteacherComponent},
      {path:'TeacherSalary/:id',component:EditsalaryComponent},
      {path:'List/Update/:state/:id',component:EmployeeeditComponent},
      {path:'Add',component:EmployeeaddComponent}
    ]}
    ,{path:'',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnalaffairesRoutingModule { }
