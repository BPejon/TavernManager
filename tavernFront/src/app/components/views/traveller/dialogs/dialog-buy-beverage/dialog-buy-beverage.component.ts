import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private service: ShopService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  buy(){
    this.service
  }

}
