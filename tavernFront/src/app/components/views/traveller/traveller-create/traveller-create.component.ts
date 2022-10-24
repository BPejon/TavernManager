import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Traveller } from '../traveller.model';
import { TravellerService } from '../traveller.service';

@Component({
  selector: 'app-traveller-create',
  templateUrl: './traveller-create.component.html',
  styleUrls: ['./traveller-create.component.css']
})
export class TravellerCreateComponent implements OnInit {

  constructor(private service : TravellerService, private router: Router) { }

  traveller: Traveller = {
    name: "",
    province: "",
    classType: "",
    level : 0,
    coins: 0 
  }

  ngOnInit(): void {
  }

  create(){
    this.service.create(this.traveller).subscribe(ans =>{
      this.service.message(`${this.traveller.name} created!`);
      this.router.navigate(["traveller"]);
    }, err => {
      this.service.message("Please, fill all the blanks.");
    })

  }

  navigateToBeverageRead(){
    this.router.navigate(["traveller"]);
  }

}
