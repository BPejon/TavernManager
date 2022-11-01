import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../../food/food.model';
import { FoodService } from '../../../food/food.service';
import { DialogEatFoodComponent } from '../../dialogs/dialog-eat-food/dialog-eat-food.component';
import { Traveller } from '../../traveller.model';
import { TravellerService } from '../../traveller.service';

@Component({
  selector: 'app-inventory-food',
  templateUrl: './inventory-food.component.html',
  styleUrls: ['./inventory-food.component.css']
})
export class InventoryFoodComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'mass', 'description', 'actions'];

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
    })

  }


  goBack(): void{
    this.router.navigate(["traveller"]);
  }

  eatDialog(foodName: string){
    this.dialog.open(DialogEatFoodComponent, {
      data:{
        travName:this.traveller.name,
        foodName: foodName
      }
    });

  }
}
