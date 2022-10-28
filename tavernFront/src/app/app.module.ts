import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { BeveragesReadComponent } from './components/views/beverages/beverages-read/beverages-read.component';
import { FoodReadComponent } from './components/views/food/food-read/food-read.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BeveragesCreateComponent } from './components/views/beverages/beverages-create/beverages-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BeveragesUpdateComponent } from './components/views/beverages/beverages-update/beverages-update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FoodCreateComponent } from './components/views/food/food-create/food-create.component';
import { FoodUpdateComponent } from './components/views/food/food-update/food-update.component';
import { DialogDeleteComponent } from './components/views/food/dialogs/dialog-delete/dialog-delete.component';
import { TravellerReadComponent } from './components/views/traveller/traveller-read/traveller-read.component';
import { TravellerCreateComponent } from './components/views/traveller/traveller-create/traveller-create.component';
import { TravellerUpdateComponent } from './components/views/traveller/traveller-update/traveller-update.component';
import { TravellerBuyComponent } from './components/views/traveller/traveller-buy/traveller-buy.component';
import { ShopBeverageComponent } from './components/views/traveller/shop/shop-beverage/shop-beverage.component';
import { ShopFoodComponent } from './components/views/traveller/shop/shop-food/shop-food.component';
import { ShopSelectorComponent } from './components/views/traveller/shop/shop-selector/shop-selector.component';
import { DialogBuyFoodComponent } from './components/views/traveller/dialogs/dialog-buy-food/dialog-buy-food.component';
import { DialogBuyBeverageComponent } from './components/views/traveller/dialogs/dialog-buy-beverage/dialog-buy-beverage.component';
import { InventoryFoodComponent } from './components/views/traveller/inventory/inventory-food/inventory-food.component';
import { InventoryBeverageComponent } from './components/views/traveller/inventory/inventory-beverage/inventory-beverage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    BeveragesReadComponent,
    FoodReadComponent,
    BeveragesCreateComponent,
    BeveragesUpdateComponent,
    FoodCreateComponent,
    FoodUpdateComponent,
    DialogDeleteComponent,
    TravellerReadComponent,
    TravellerCreateComponent,
    TravellerUpdateComponent,
    TravellerBuyComponent,
    ShopBeverageComponent,
    ShopFoodComponent,
    ShopSelectorComponent,
    DialogBuyFoodComponent,
    DialogBuyBeverageComponent,
    InventoryFoodComponent,
    InventoryBeverageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
