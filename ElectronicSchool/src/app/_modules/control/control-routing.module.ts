import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import {AdddegreeComponent} from './components/degrees/Listdegree/adddegree.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {UpdatedegreesComponent} from './components/degrees/updatedegrees/updatedegrees.component';
import {DegreeannounceComponent} from './components/degrees/degreeannounce/degreeannounce.component'

const myroutes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'mainPage',component:MainNavComponent,children:[
      {path:'showDegrees',component:AdddegreeComponent},
      {path:'announceDegrees',component:DegreeannounceComponent},
      {path:'UpdateDegrees/:id',component:UpdatedegreesComponent},
      {path:'MyProfile',component:ProfileComponent},
    ]},
    
    {path:'',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(myroutes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
