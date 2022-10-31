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
import { ShopBeverageComponent } from './components/views/traveller/shop/shop-beverage/shop-beverage.component';
import { ShopFoodComponent } from './components/views/traveller/shop/shop-food/shop-food.component';
import { ShopSelectorComponent } from './components/views/traveller/shop/shop-selector/shop-selector.component';
import { InventoryFoodComponent } from './components/views/traveller/inventory/inventory-food/inventory-food.component';
import { InventoryBeverageComponent } from './components/views/traveller/inventory/inventory-beverage/inventory-beverage.component';
import { ShopSellBeverageComponent } from './components/views/traveller/shop/shop-sell-beverage/shop-sell-beverage.component';
import { ShopSellFoodComponent } from './components/views/traveller/shop/shop-sell-food/shop-sell-food.component';


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
  },
  {
    path: "traveller/:id_trav",
    component: ShopSelectorComponent
  },
  {
    path: "traveller/:id_trav/shopBeverage",
    component: ShopBeverageComponent
  },
  {
    path: "traveller/:id_trav/shopFood",
    component: ShopFoodComponent
  },
  {
    path: "traveller/:id_trav/foodInventory",
    component: InventoryFoodComponent
  },
  {
    path: "traveller/:id_trav/beverageInventory",
    component: InventoryBeverageComponent
  },
  {
    path: "traveller/:id_trav/sellBeverage",
    component: ShopSellBeverageComponent
  },
  {
    path: "traveller/:id_trav/sellFood",
    component: ShopSellFoodComponent
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
