import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit(): void {
  }

  updateAndReturn(){


  }

  navigateToBeveragesRead(){
    this.router.navigate(["food"]);
  }

  openDeleteDialog(){
    //this.dialog.open();


  }
}
