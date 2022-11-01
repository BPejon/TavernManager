import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TravellerService } from '../../traveller.service';

@Component({
  selector: 'app-dialog-eat-food',
  templateUrl: './dialog-eat-food.component.html',
  styleUrls: ['./dialog-eat-food.component.css']
})
export class DialogEatFoodComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEatFoodComponent>,
    private service: TravellerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  eat(){
    this.service.eatFood(this.data.travName, this.data.foodName).subscribe(()=>{
      this.dialogRef.close();
      this.router.navigate(['/']).then ( ()=>{
        this.router.navigate([`traveller/${this.data.travName}/foodInventory`]);
        this.service.message(`You've eaten ${this.data.foodName}`);
      })
    })

  }

}
