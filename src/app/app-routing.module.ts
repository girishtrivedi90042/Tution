import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:"",pathMatch: "full", redirectTo: "/home"},
  // {path: "home",component:AppComponent},
  {path: "Teachers",component:TeachersComponent},
  {path: "Students",component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
