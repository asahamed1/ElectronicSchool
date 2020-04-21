import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {HomeComponent} from './components/home/home.component';
import {MainnavComponent} from './components/mainnav/mainnav.component';
import {ProfileComponent} from './components/profile/profile.component';
import {StudentlistComponent} from './components/student/studentlist/studentlist.component';
import {StudentaddComponent} from './components/student/studentadd/studentadd.component';
import {StudenteditComponent} from './components/student/studentedit/studentedit.component';
import {ParentaddComponent} from './components/parent/parentadd/parentadd.component';
import {ParentlistComponent} from './components/parent/parentlist/parentlist.component';
import {ParenteditComponent} from './components/parent/parentedit/parentedit.component';
import {ClasseaddComponent} from './components/table/classeadd/classeadd.component';
import {ClasseditComponent} from './components/table/classedit/classedit.component'
import { ClasslistComponent } from './components/table/classlist/classlist.component';
import { TableComponent } from './components/table/table/table.component';

const routes: Routes = [
  {path:'' ,component:MainComponent,children:[
    {path:'Student',component:MainnavComponent,children:[
      {path:'Profile',component:ProfileComponent},
      {path:'students',component:StudentlistComponent},
      {path:'students/Studentedit/:id',component:StudenteditComponent},
      {path:'StudentAdd',component:StudentaddComponent},
      {path:'parent',component:ParentlistComponent},
      {path:'parent/parentedit/:id',component:ParenteditComponent},
      {path:'parentadd',component:ParentaddComponent},
      {path:'Subject',component:ClasslistComponent},
      {path:'Subject/Add' ,component:ClasseaddComponent},
      {path:'Subject/Edit/:id',component:ClasseditComponent},
      {path:'Subject/Table/:id',component:TableComponent}

    ]},
    {path:'',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentaffairesRoutingModule { }
