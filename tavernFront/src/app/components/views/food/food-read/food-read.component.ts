import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-read',
  templateUrl: './food-read.component.html',
  styleUrls: ['./food-read.component.css']
})
export class FoodReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'price', 'weight', 'stockAmount', 'description', 'actions'];

}
