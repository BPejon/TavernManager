import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food, FoodPage } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  baseUrl : string = environment.baseUrl;
  constructor(private http: HttpClient) { }


  findAll(pageIndex: number, pageSize:number) : Observable<FoodPage>{
    const url = `${this.baseUrl}/food?page=${pageIndex}&size=${pageSize}`;
    return this.http.get<FoodPage>(url);
  }

  create(food: Food): Observable<Food>{
    const url = `${this.baseUrl}/food/${food.name}`;
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
}
