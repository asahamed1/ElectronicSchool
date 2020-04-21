import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DegreeComponent } from './components/degree/degree.component';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'' ,component:MainComponent,children:[
    {path:'parent',component:MainnavComponent,children:[
      {path:'Profile',component:ProfileComponent},
      {path:'Degree',component:DegreeComponent},
      {path:'Table',component:TableComponent}
    ]},
    {path:'',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
