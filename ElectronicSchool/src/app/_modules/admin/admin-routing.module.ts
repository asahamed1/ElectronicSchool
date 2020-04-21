import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { HomeComponent } from './component/home/home.component';
import { ListNewsComponent } from './component/news/list-news/list-news.component';
import { AddNewsComponent } from './component/news/add-news/add-news.component';
import { ListActivitiesComponent } from './component/activities/list-activities/list-activities.component';
import { AddActivitiesComponent } from './component/activities/add-activities/add-activities.component';
import { AddRoleComponent } from './component/role/add-role/add-role.component';


const myroutes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'mainPage',component:MainNavComponent,children:[
      {path:"listNews",component:ListNewsComponent},
      {path:"addNews",component:AddNewsComponent},
      {path:"listActivities",component:ListActivitiesComponent},
      {path:"addActivities",component:AddActivitiesComponent},
      {path:"addRole",component:AddRoleComponent},
      // {path:'showDegrees',component:AdddegreeComponent},
      // {path:'announceDegrees',component:DegreeannounceComponent},
      // {path:'UpdateDegrees/:id',component:UpdatedegreesComponent},
      // {path:'MyProfile',component:ProfileComponent},
    ]},
    
    {path:'',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(myroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
