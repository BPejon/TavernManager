import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css']
})
export class FoodCreateComponent implements OnInit {

  constructor(
    private service: FoodService,
    private router: Router
    ){}

  ngOnInit(): void {
  }

  createFood(): void{
    this.service.create();

  }

  navigateToFoodRead(): void{
    this.router.navigate(["food"])

  }

}
