import { Injectable } from '@angular/core';
import { Cat } from '../../shared/models/cat.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private baseURL = 'https://api.thecatapi.com/v1/images/';

  constructor(private http: HttpClient) { }

  getCats(limit: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.baseURL}search?limit=${limit}`)
  }

  getCatById(id: string): Observable<Cat> {
    return this.http.get<Cat>(`${this.baseURL}${id}`)
  }
}
