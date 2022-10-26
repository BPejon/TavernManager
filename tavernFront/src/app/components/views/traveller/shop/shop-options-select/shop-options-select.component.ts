import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-shop-options-select',
  templateUrl: './shop-options-select.component.html',
  styleUrls: ['./shop-options-select.component.css']
})
export class ShopOptionsSelectComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  id_trav !: string;

  ngOnInit(): void {
    this.id_trav = this.route.snapshot.paramMap.get("id_trav")!;
  }

  goToShopBeverage(){
    this.router.navigate([`traveller/${this.id_trav}/shopBeverage`]);
  }

  goToShopFood(){
    this.router.navigate([`traveller/${this.id_trav}/shopFood`]);
  }

  goBack(){
    this.router.navigate([`traveller/${this.id_trav}/traveller`]);
  }
}
