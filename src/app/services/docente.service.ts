import { Injectable } from '@angular/core';
import { Docente } from '../interfaces/docente';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private API:ApiService) { }

  //Se captura todos los datos del docente
  getallDocente(){
    const url='docente/allin';
    return this.API.getTypeRequest(url);
  }
  // se busca un docente pro su codigo
  getDocente(Docid:String){
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

  postDeleteDocente(Docid:String){
    const url='docente/delete?CodDocente='+Docid;
    return this.API.postTypeRequest(url);
  }

  postLoggerDoc(CodDocente:String,password:String){
    const url='user/login?CodDocente='+CodDocente+'&password='+password;
    return this.API.postTypeRequest(url);
  }

}
