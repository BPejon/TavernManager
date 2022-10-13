import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { BeveragesReadComponent } from './components/views/beverages/beverages-read/beverages-read.component';
import { FoodReadComponent } from './components/views/food/food-read/food-read.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"drinks",
    component: BeveragesReadComponent
  },
  {
    path: "food",
    component: FoodReadComponent
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
