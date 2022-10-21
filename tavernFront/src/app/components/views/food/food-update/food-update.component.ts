import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeleteComponent } from '../dialogs/dialog-delete/dialog-delete.component';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-update',
  templateUrl: './food-update.component.html',
  styleUrls: ['./food-update.component.css']
})
export class FoodUpdateComponent implements OnInit {


  food : Food= {
    name: '',
    price: 0,
    mass: 0,
    stockAmount: 0,
    description:''
  }

  constructor(
    private service: FoodService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.food.name = this.route.snapshot.paramMap.get('id')!;
    this.findById(this.food.name);

  }

  findById(name : String){
    this.service.findById(name).subscribe(ans =>{
      console.log(ans);
      this.food = ans;
    })

  }

  updateAndReturn(){
    this.service.update(this.food).subscribe(ans =>{
      this.router.navigate(["food"]);
      this.service.message(`${this.food.name} Updated!`);
    }, err=>{
      this.service.message("Verify any blank input");
    })

  }

  navigateToBeveragesRead(){
    this.router.navigate(["food"]);
  }

  openDeleteDialog(){
    this.dialog.open(DialogDeleteComponent, {
      data: this.food.name
    });


  }
}
