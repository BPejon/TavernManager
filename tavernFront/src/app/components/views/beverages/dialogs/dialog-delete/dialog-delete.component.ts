import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { Route, Router } from '@angular/router';
import { BeveragesService } from '../../beverages.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  //@Inject(MAT_DIALOG_DATA) public data: DialogData)
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


// , err =>{
//   this.service.message(`Error on deleting ${this.data}`);
