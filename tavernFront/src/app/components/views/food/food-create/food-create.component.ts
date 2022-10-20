import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css']
})
export class FoodCreateComponent implements OnInit {

  food : Food ={
    name: '',
    price: 0,
    mass: 0,
    stockAmount: 0,
    description: ''
  }

  constructor(
    private service: FoodService,
    private router: Router
    ){}

  ngOnInit(): void {
  }

  createFood(): void{
    this.service.create(this.food).subscribe(ans=>{
      console.log(this.food);
      this.service.message(`${this.food.name} created!`);
      this.router.navigate(['food']);
    });

  }

  navigateToFoodRead(): void{
    this.router.navigate(["food"])

  }

}
