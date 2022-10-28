import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TravellerService } from '../../traveller.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-dialog-drink-beverage',
  templateUrl: './dialog-drink-beverage.component.html',
  styleUrls: ['./dialog-drink-beverage.component.css']
})
export class DialogDrinkBeverageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
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
      this.dialogRef.close();
      window.location.reload();
      this.service.message(`You've eaten ${this.data.bevName}`);

    })

  }
}
