import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FoodService } from '../../../food/food.service';
import { ShopService } from '../../shop/shop.service';
import { DialogBuyFoodComponent } from '../dialog-buy-food/dialog-buy-food.component';

@Component({
  selector: 'app-dialog-sell-food',
  templateUrl: './dialog-sell-food.component.html',
  styleUrls: ['./dialog-sell-food.component.css']
})
export class DialogSellFoodComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogBuyFoodComponent>,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit(): void {
    };

  cancel(){
    this.dialogRef.close();
  }

  sell(){
    this.shopService.sellFood(this.data.travName, this.data.foodName).subscribe(() => {
      this.dialogRef.close();
      this.router.navigate(["/"]).then( ()=>{
        this.router.navigate([`traveller/${this.data.travName}/sellFood`]);
        this.shopService.message(`${this.data.foodName} bought successfully`);
      })
    }, err=>{
      this.shopService.message(`Not enought money to buy this item!`);
    })
  }

}
