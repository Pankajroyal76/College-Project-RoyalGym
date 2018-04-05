import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { TrainnerComponent } from './trainner/trainner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },

  {
    path:'members',
    component:MembersComponent
  },
  {
    path:'trainner',
    component:TrainnerComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'schedule',
    component:ScheduleComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
