import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:4000/';

  constructor(private _http: HttpClient) { }

  getTypeRequest(url:string) {
    return this._http.get<any>(`${this.baseUrl}${url}`);
  }

  postTypeRequest(url:string) {
    return this._http.post<any>(`${this.baseUrl}${url}`,null);
  }

}
