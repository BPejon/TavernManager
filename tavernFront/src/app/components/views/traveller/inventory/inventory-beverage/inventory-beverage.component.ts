import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Beverages} from '../../../beverages/beverages.model';
import { DialogDrinkBeverageComponent } from '../../dialogs/dialog-drink-beverage/dialog-drink-beverage.component';
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

  drinkDialog(beverageName: string){
    const dialogRef = this.dialog.open(DialogDrinkBeverageComponent, {
      data:{
        travName:this.traveller.name,
        bevName: beverageName
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
      if(result){
        this.travellerService.message(`You've drink ${beverageName}`);
      }
    })

  }
}
