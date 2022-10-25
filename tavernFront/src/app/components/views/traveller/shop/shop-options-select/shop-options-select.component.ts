import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-shop-options-select',
  templateUrl: './shop-options-select.component.html',
  styleUrls: ['./shop-options-select.component.css']
})
export class ShopOptionsSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToShopBeverage(){
    this.router.navigate(["/shopBeverage"]);
  }

  goToShopFood(){
    this.router.navigate(["/shopFood"]);
  }

  goBack(){
    this.router.navigate(["traveller"]);
  }
}
