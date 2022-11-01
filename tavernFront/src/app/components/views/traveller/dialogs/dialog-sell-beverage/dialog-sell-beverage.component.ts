import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../food/food.service';
import { ShopService } from '../../shop/shop.service';
import { DialogBuyFoodComponent } from '../dialog-buy-food/dialog-buy-food.component';

@Component({
  selector: 'app-dialog-sell-beverage',
  templateUrl: './dialog-sell-beverage.component.html',
  styleUrls: ['./dialog-sell-beverage.component.css']
})
export class DialogSellBeverageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogBuyFoodComponent>,
    private shopService: ShopService,
    private router: Router,
  ) { }

  id_trav !: string;
  ngOnInit(): void {
    };

  cancel(){
    this.dialogRef.close();
  }

  sell(){
    const currentUrl = `traveller/${this.data.travName}/sellBeverage`;
    this.shopService.sellBeverage(this.data.travName, this.data.bevName).subscribe(() => {
      this.dialogRef.close();
      this.router.navigate([`/`]).then(()=>{
        this.router.navigate([currentUrl]);
        this.shopService.message(`${this.data.bevName} sold successfully`);
      }
      )
    }, err=>{
      this.shopService.message(`Not enought money to buy this item!`);
    })
  }

}
