import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Header/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {ContactusComponent } from './components/contactus/contactus.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  {path:'aboutus',component:AboutComponent},
  {path:'Login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent}, 
  {path:'Teachers',loadChildren:()=>import('./_modules/teachers/teachers.module').then(m=>m.TeachersModule)},
  {path:'Parents',loadChildren:()=>import('./_modules/parents/parents.module').then(m=>m.ParentsModule)},
  {path:'Students',loadChildren:()=>import('./_modules/students/students.module').then(m=>m.StudentsModule)},
  {path:'studentAffaires',loadChildren:()=>import('./_modules/studentaffaires/studentaffaires.module').then(m=>m.StudentaffairesModule)},
  {path:'personalAffaires' ,loadChildren:()=>import('./_modules/personnalaffaires/personnalaffaires.module').then(m=>m.PersonnalaffairesModule)},
  {path:'control',loadChildren:()=>import('./_modules/control/control.module').then(m=>m.ControlModule)},
  {path:"admin",loadChildren:()=>import('./_modules/admin/admin.module').then(m=>m.AdminModule)},
  {path:'',component:HomeComponent},
  {path:'**',component:ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
