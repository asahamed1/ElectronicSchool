import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ControlRoutingModule } from './control-routing.module';

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { AdddegreeComponent } from './components/degrees/Listdegree/adddegree.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { UpdatedegreesComponent } from './components/degrees/updatedegrees/updatedegrees.component';
import { DegreeannounceComponent } from './components/degrees/degreeannounce/degreeannounce.component';


@NgModule({
  declarations: [MainComponent, HomeComponent, AdddegreeComponent, ProfileComponent, MainNavComponent, UpdatedegreesComponent, DegreeannounceComponent],
  imports: [
    CommonModule,
    ControlRoutingModule, ReactiveFormsModule,FormsModule,
  ],
})
export class ControlModule { }
