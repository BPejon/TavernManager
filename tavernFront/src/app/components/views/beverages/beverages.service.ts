import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beverages, Page } from './beverages.model';

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snackBar : MatSnackBar) { }

  //Find all com paginação -> param para paginação
  findAll(pageNumber: number, pageSize: number): Observable<Page>{
    const url = `${this.baseUrl}/drinks?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<any>(url);
  }

  create(beverage: Beverages): Observable<Beverages>{
    const url = `${this.baseUrl}/drinks`;
    return this.http.post<Beverages>(url, beverage);
  }

  update(beverage: Beverages): Observable<Beverages>{
    const url = `${this.baseUrl}/drinks/${beverage.name}`;
    return this.http.put<Beverages>(url, beverage);
  }

  findById(id: String): Observable<Beverages>{
    const url = `${this.baseUrl}/drinks/${id}`;
    return this.http.get<Beverages>(url);
  }
  message(str: String): void{
    this.snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });

  }
}
