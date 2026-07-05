import { Injectable } from '@angular/core';
import { Cat } from '../../shared/models/cat.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'https://api.thecatapi.com/v1/images/';

  constructor(private http: HttpClient) { }

  getCats(limit: number = 10): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.baseURL}search?limit=${limit}`)
  }
}
