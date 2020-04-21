import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { DegreeComponent } from './components/degree/degree.component';
import { TableComponent } from './components/table/table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';


const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'info',component:MainnavComponent,children:[
      {path:'Degrees',component:DegreeComponent},
      {path:'Table',component:TableComponent},
      {path:'Profile',component:ProfileComponent}
    ]},
    {path:'',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
