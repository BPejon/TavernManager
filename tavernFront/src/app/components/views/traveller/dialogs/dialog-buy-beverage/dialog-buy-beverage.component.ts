import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BeveragesService } from '../../../beverages/beverages.service';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-dialog-buy-beverage',
  templateUrl: './dialog-buy-beverage.component.html',
  styleUrls: ['./dialog-buy-beverage.component.css']
})
export class DialogBuyBeverageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogBuyBeverageComponent>,
    private shopService: ShopService,
    private bevService: BeveragesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  cancel(){
    this.dialogRef.close();
  }

  buy(){
    this.bevService.findById(this.data.bevName).subscribe(beverage=>{
      this.shopService.buyBeverage(this.data.travName, this.data.bevName, beverage).subscribe(() =>{
        this.dialogRef.close();
        this.router.navigate(['']).then( () =>{
          this.router.navigate([`traveller/${this.data.travName}/shopBeverage`]);
          this.shopService.message(`${this.data.bevName} bought successfully`);

        })
      },err =>{
        this.shopService.message(`Not enought money to buy this item!`);
      })
    })
    
  }

}
