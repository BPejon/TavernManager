import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beverages } from '../../beverages/beverages.model';
import { Food } from '../../food/food.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  buyBeverage(id_trav:string, id_bev:string, beverage: Beverages): Observable<void>{
    const url = `${this.baseUrl}${id_trav}/buydrink/${id_bev}`;
    return this.http.put<void>(url, beverage);
  }

  buyFood(id_trav:string, id_food:string, food: Food): Observable<void>{
    const url = `${this.baseUrl}${id_trav}/buyfood/${id_food}`;
    return this.http.put<void>(url, food);
  }

  message(str : String): void{
    this.snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    })
  }


}
