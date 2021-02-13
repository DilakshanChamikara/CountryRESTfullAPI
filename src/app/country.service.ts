import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseURL = 'http://127.0.0.1:8080/rest/v2/countries';

  constructor(private httpClient: HttpClient) { }

  getCountriesList(): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.baseURL}`);
  }

  createCountry(country: Country): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, country);
  }

  getCountry(id: number): Observable<Country>{
    return this.httpClient.get<Country>(`${this.baseURL}/${id}`);
  }

  updateCountry(id: number, country: Country): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, country);
  }

  deleteCountry(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
