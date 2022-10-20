import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beverages } from '../beverages.model';
import { BeveragesService } from '../beverages.service';

@Component({
  selector: 'app-beverages-create',
  templateUrl: './beverages-create.component.html',
  styleUrls: ['./beverages-create.component.css']
})
export class BeveragesCreateComponent implements OnInit {

  beverage: Beverages = {
    name: '',
    price: 0,
    bottleSize: 0,
    stockAmount:0,
    description: ''
  }
  constructor(private service: BeveragesService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.beverage).subscribe(ans=> {
      console.log(ans);
      this.service.message(`${this.beverage.name} Created`);
      this.router.navigate(["drinks"]);
      console.log(ans);
    }, err =>{
      this.service.message("An error ocurred!");
    })
  }

  navigateToBeverageRead() : void{
    this.router.navigate(["drinks"]);
  }

  update(){


  }
}
