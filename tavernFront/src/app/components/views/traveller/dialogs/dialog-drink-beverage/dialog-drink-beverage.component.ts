import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  drink(){
    this.service.drinkBeverage(this.data.travName, this.data.bevName).subscribe(()=>{
      this.dialogRef.close(this.data.bevName);
      window.location.reload();
      this.service.message(`You've drink ${this.data.bevName}`);
    })

  }
}
