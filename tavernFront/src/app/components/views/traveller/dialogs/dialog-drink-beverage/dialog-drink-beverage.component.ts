import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TravellerService } from '../../traveller.service';

@Component({
  selector: 'app-dialog-drink-beverage',
  templateUrl: './dialog-drink-beverage.component.html',
  styleUrls: ['./dialog-drink-beverage.component.css']
})
export class DialogDrinkBeverageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogDrinkBeverageComponent>,
    private service: TravellerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  drink(){
    this.service.drinkBeverage(this.data.travName, this.data.bevName).subscribe(()=>{
      this.dialogRef.close(this.data.bevName);
      this.router.navigate(['/']).then ( ()=> {
        this.router.navigate([`traveller/${this.data.travName}/beverageInventory`]);
        this.service.message(`You've drink ${this.data.bevName}`);

      })
    })

  }
}
