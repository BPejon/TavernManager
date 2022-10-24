import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Traveller } from '../traveller.model';
import { TravellerService } from '../traveller.service';

@Component({
  selector: 'app-traveller-update',
  templateUrl: './traveller-update.component.html',
  styleUrls: ['./traveller-update.component.css']
})
export class TravellerUpdateComponent implements OnInit {


  traveller: Traveller = {
    name: "",
    province: "",
    classType: "",
    level : 0,
    coins: 0 
  }
  
  constructor(private service: TravellerService,
     private router: Router,
     private route: ActivatedRoute,
     public dialog: MatDialog) { }

  ngOnInit(): void {
    this.traveller.name= this.route.snapshot.paramMap.get('id')!;
    this.findById(this.traveller.name);
  }

  findById(id : string): void{
    this.service.findById(id).subscribe( ans=>{
      this.traveller = ans;
    });
  }

  updateAndReturn(){
    this.service.update(this.traveller).subscribe(ans =>{
      this.router.navigate(['traveller']);
      this.service.message(`${this.traveller.name} updated!`);
    }, err => {
      this.service.message("Fill all the blanks!");
    })
  }

  navigateToTravellerRead(){
    this.router.navigate(["traveller"]);
  }

  openDeleteDialog(){

  }
}
