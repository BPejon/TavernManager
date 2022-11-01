import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Beverages } from '../../../beverages/beverages.model';
import { DialogSellBeverageComponent } from '../../dialogs/dialog-sell-beverage/dialog-sell-beverage.component';
import { DialogSellFoodComponent } from '../../dialogs/dialog-sell-food/dialog-sell-food.component';
import { Traveller } from '../../traveller.model';
import { TravellerService } from '../../traveller.service';

@Component({
  selector: 'app-shop-sell-beverage',
  templateUrl: './shop-sell-beverage.component.html',
  styleUrls: ['./shop-sell-beverage.component.css']
})
export class ShopSellBeverageComponent implements OnInit {


  displayedColumns: string[] = ['name', 'price', 'bottleSize', 'stockAmount', 'description', 'actions'];

  travBeverages : Beverages[] = [];
  traveller!: Traveller;
  id_trav !: string;
  coins:number = 0;
  
  constructor(
    private travellerService: TravellerService,
    private router: Router, 
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id_trav = this.route.snapshot.paramMap.get("id_trav")!;
    this.findTraveller(this.id_trav);
  }


  findTraveller(id: string): void{
    this.travellerService.findById(id).subscribe(ans=>{
      this.traveller = ans;
      this.travBeverages = this.traveller.drinksInventory!;
      this.coins = this.traveller.coins;
    })

  }

  goBack(): void{
    this.router.navigate(["traveller"]);
  }

  sellDialog(bevName : string, bevPrice: number){
    this.dialog.open(DialogSellBeverageComponent, {
      data: {
        travName: this.traveller.name,
        travCoins: this.traveller.coins,
        bevName: bevName,
        bevPrice: bevPrice        
      }
    })

  }

  buy(){
    this.router.navigate([`traveller/${this.id_trav}/shopBeverage`]);
  }

}
