import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beverages, Page } from './beverages.model';

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Find all com paginação -> param para paginação
  findAll(pageNumber: number, pageSize: number): Observable<Page>{
    const url = `${this.baseUrl}/drinks?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<any>(url);
  }
}
