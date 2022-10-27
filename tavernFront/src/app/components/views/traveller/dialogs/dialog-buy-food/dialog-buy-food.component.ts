import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FoodService } from '../../../food/food.service';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-dialog-buy-food',
  templateUrl: './dialog-buy-food.component.html',
  styleUrls: ['./dialog-buy-food.component.css']
})
export class DialogBuyFoodComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogBuyFoodComponent>,
    private shopService: ShopService,
    private foodService: FoodService,
  ) { }

  ngOnInit(): void {
    };

  cancel(){
    this.dialogRef.close();
  }

  buy(){
    this.foodService.findById(this.data.foodName).subscribe(food=>{
      this.shopService.buyFood(this.data.travName, this.data.foodName,food).subscribe(() => {
        this.dialogRef.close();
        window.location.reload();
        this.shopService.message(`${this.data.foodName} bought successfully`);
      }, err=>{
        this.shopService.message(`Not enought money to buy this item!`);
    })

    })

  }

}
