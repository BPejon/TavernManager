import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beverages } from './beverages.model';

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Beverages[]>{
    const url = `${this.baseUrl}/drinks`;
    return this.http.get<Beverages[]>(url);
  }
}
