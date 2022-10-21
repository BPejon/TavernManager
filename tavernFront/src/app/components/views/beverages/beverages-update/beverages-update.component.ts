import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router} from '@angular/router';
import { Beverages } from '../beverages.model';
import { BeveragesService } from '../beverages.service';
import { DialogDeleteComponent } from '../dialogs/dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-beverages-update',
  templateUrl: './beverages-update.component.html',
  styleUrls: ['./beverages-update.component.css']
})
export class BeveragesUpdateComponent implements OnInit {

  //Qual a dif entre = e : ?
  beverage : Beverages = {
    name: '',
    price: 0,
    bottleSize: 0,
    stockAmount: 0,
    description:''
  }
  constructor(
    private service: BeveragesService,
    private router: Router, 
    private route: ActivatedRoute, 
    public dialog: MatDialog){}

  ngOnInit(): void {
    this.beverage.name = this.route.snapshot.paramMap.get('id')!;
    this.findById(this.beverage.name);
  }
  
  updateAndReturn(){
    this.service.update(this.beverage).subscribe(ans =>{
      this.router.navigate(["drinks"]);
      this.service.message(`${this.beverage.name} Updated!`);
    }, err=>{
      this.service.message("Verify if have any blank option");
    })

  }


  findById(id: String){
    this.service.findById(id).subscribe(ans =>{
      this.beverage = ans;

    })

  }
  navigateToBeveragesRead():void{
    this.router.navigate(["drinks"]);
  }

  openDeleteDialog(){
    this.dialog.open(DialogDeleteComponent,{
      data: this.beverage.name
    });
  }
}
