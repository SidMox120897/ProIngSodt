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

  postTypeRequest(url:string, payload:any) {
    return this._http.post(`${this.baseUrl}${url}`, payload);
  }
  putTypeRequest(url:string, payload:any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

}
