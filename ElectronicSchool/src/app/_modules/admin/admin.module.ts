import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { AddNewsComponent } from './component/news/add-news/add-news.component';
import { ListNewsComponent } from './component/news/list-news/list-news.component';
import { AddActivitiesComponent } from './component/activities/add-activities/add-activities.component';
import { ListActivitiesComponent } from './component/activities/list-activities/list-activities.component';
import { AddRoleComponent } from './component/role/add-role/add-role.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, MainComponent, MainNavComponent, AddNewsComponent, ListNewsComponent, AddActivitiesComponent, ListActivitiesComponent, AddRoleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,ReactiveFormsModule,FormsModule,

  ]
})
export class AdminModule { }
