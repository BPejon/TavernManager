import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Traveller } from './traveller.model';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  findAll(pageNumber: number, pageSize:number): Observable<Traveller> {
    const url = `${this.baseUrl}/traveller?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<Traveller>(url);

  }
  
  findById(id: String): Observable<Traveller>{
    const url = `${this.baseUrl}/traveller/${id}`;
    return this.http.get<Traveller>(url);
  }

  create(traveller : Traveller): Observable<Traveller>{
    const url = `${this.baseUrl}/traveller`;
    return this.http.post<Traveller>(url, traveller);

  }

  update(traveller: Traveller): Observable<Traveller>{
    const url = `${this.baseUrl}/traveller/${traveller.name}`;
    return this.http.put<Traveller>(url, traveller);

  }

  delete(id : String ): Observable<void>{
    const url = `${this.baseUrl}/traveller/${id}`;
    return this.http.delete<void>(url);
  }

  message(str : String): void{
    this.snackBar.open(`${str}`, 'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }
}
