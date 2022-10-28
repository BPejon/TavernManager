import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Beverages, Page, Pageable, Sort } from '../../../beverages/beverages.model';
import { BeveragesService } from '../../../beverages/beverages.service';
import { DialogDrinkBeverageComponent } from '../../dialogs/dialog-drink-beverage/dialog-drink-beverage.component';
import { ShopBeverageComponent } from '../../shop/shop-beverage/shop-beverage.component';
import { Traveller } from '../../traveller.model';
import { TravellerService } from '../../traveller.service';

@Component({
  selector: 'app-inventory-beverage',
  templateUrl: './inventory-beverage.component.html',
  styleUrls: ['./inventory-beverage.component.css']
})
export class InventoryBeverageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'bottleSize', 'stockAmount', 'description', 'actions'];

  travBeverages : Beverages[] = [];
  traveller!: Traveller;
  id_trav !: string;
  coins:number = 0;
  
  constructor(
    private travellerService: TravellerService,
    private beverageService: BeveragesService,
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
    })

  }


  goBack(): void{
    this.router.navigate(["traveller"]);
  }

  eatDialog(beverageName: string){
    this.dialog.open(DialogDrinkBeverageComponent, {
      data:{
        travName:this.traveller.name,
        bevName: beverageName
      }
    });

  }
}
