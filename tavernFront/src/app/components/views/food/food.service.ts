import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food, FoodPage } from './food.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  baseUrl : string = environment.baseUrl;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  findAll(pageIndex: number, pageSize:number) : Observable<FoodPage>{
    const url = `${this.baseUrl}/food?page=${pageIndex}&size=${pageSize}`;
    return this.http.get<FoodPage>(url);
  }

  create(food: Food): Observable<Food>{
    const url = `${this.baseUrl}`;
    return this.http.post<Food>(url, food);
  }

  findById(id: String): Observable<Food>{
    const url = `${this.baseUrl}/food/${id}`;
    return this.http.get<Food>(url);

  }

  update(food: Food): Observable<Food>{
    const url = `${this.baseUrl}/food/${food.name}`;
    return this.http.put<Food>(url, food);
   }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/food/${id}`;
    return this.http.delete<void>(url);
  }

  message(str : String): void{
    this.snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }
}
