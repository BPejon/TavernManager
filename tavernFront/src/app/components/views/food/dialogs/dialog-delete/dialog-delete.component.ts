import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BeveragesService } from '../../../beverages/beverages.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: String,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    private service: BeveragesService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  cancel(){
    this.dialogRef.close();

  }

  delete(){
    this.service.delete(this.data).subscribe(ans =>{
      this.dialogRef.close();
      this.router.navigate(["drinks"]);
      this.service.message(`${this.data} removed`); 
    })
  }
}
