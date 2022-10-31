import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../../food/food.model';
import { Traveller } from '../../traveller.model';
import { TravellerService } from '../../traveller.service';

@Component({
  selector: 'app-shop-sell-food',
  templateUrl: './shop-sell-food.component.html',
  styleUrls: ['./shop-sell-food.component.css']
})
export class ShopSellFoodComponent implements OnInit {


  displayedColumns: string[] = ['name', 'price', 'mass', 'stockAmount', 'description', 'actions'];

  travFood : Food[] = [];
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
      this.travFood = this.traveller.foodInventory!;
      this.coins = this.traveller.coins;
    })

  }


  goBack(): void{
    this.router.navigate([`traveller`]);
  }

  sellDialog(foodName : string){


  }

  buy(){
    this.router.navigate([`traveller/${this.id_trav}/shopFood`]);
  }

}
