import { Injectable } from '@angular/core';
import { Docente } from '../interfaces/docente';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private API:ApiService) { }


  getallDocente(){
    const url='docente/allin';
    return this.API.getTypeRequest(url);
  }

  getDocente(Docid:string){
    const url='docente/search?CodDocente='+Docid;
    return this.API.getTypeRequest(url);
  }

  postAddDocente(docente:Docente){
    const url='docente/register?CodDocente='+docente.CodDocente
                              +'&nameDocente='+docente.nameDocente
                              +'&surname='+docente.surname
                              +'&correo='+docente.correo
                              +'&phone='+docente.phone
                              +'&password='+docente.password;
    return this.API.postTypeRequest(url);
  }

  postDeleteDocente(Docid:string){
    const url='docente/delete?CodDocente='+Docid;
    return this.API.postTypeRequest(url);
  }
}
