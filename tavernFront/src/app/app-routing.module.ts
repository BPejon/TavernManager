import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { BeveragesReadComponent } from './components/views/beverages/beverages-read/beverages-read.component';
import { FoodReadComponent } from './components/views/food/food-read/food-read.component';
import { BeveragesCreateComponent } from './components/views/beverages/beverages-create/beverages-create.component';
import { BeveragesUpdateComponent } from './components/views/beverages/beverages-update/beverages-update.component';
import { FoodCreateComponent } from './components/views/food/food-create/food-create.component';
import { FoodUpdateComponent } from './components/views/food/food-update/food-update.component';
import { TravellerReadComponent } from './components/views/traveller/traveller-read/traveller-read.component';
import { TravellerCreateComponent } from './components/views/traveller/traveller-create/traveller-create.component';
import { TravellerUpdateComponent } from './components/views/traveller/traveller-update/traveller-update.component';


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
    path:"drinks/create",
    component: BeveragesCreateComponent
  },
  {
    path:"drinks/update/:id",
    component: BeveragesUpdateComponent
  },
  {
    path: "food",
    component: FoodReadComponent
  },
  {
    path:"food/create",
    component:FoodCreateComponent
  },
  {
    path:"food/update/:id",
    component:FoodUpdateComponent
  },
  {
    path:"traveller",
    component:TravellerReadComponent
  },
  {
    path: "traveller/create",
    component: TravellerCreateComponent
  },
  {
    path: "traveller/update/:id",
    component: TravellerUpdateComponent
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
