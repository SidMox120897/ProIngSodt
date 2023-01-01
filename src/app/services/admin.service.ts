import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //private Administrador:Admin;
  respuesta:any;

  constructor(private API:ApiService) { }

  getallAdmin(){
    const url='user/allin';
    return this.API.getTypeRequest(url);
  }

  getAdmin(adminid:string){
    const url='user/search?iduser='+adminid;
    return this.API.getTypeRequest(url);
  }
}
