import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: String,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    private service: FoodService,
    private router: Router) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();

  }

  delete(){
    this.service.delete(this.data).subscribe(ans =>{
      this.dialogRef.close();
      this.router.navigate(["food"]);
      this.service.message(`${this.data} removed`); 
    })
  }
}
