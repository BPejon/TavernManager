import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
