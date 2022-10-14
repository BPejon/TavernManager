import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodPage } from './food.model';

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
}
