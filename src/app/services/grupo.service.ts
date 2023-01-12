import { Injectable } from '@angular/core';
import { Grupo } from '../interfaces/grupo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private API:ApiService) { }

  getallGrupo(){
    const url='grupo/allin';
    return this.API.getTypeRequest(url);
  }

  getGrupo(grupoid:string){
    const url='grupo/search?CodEquipo='+grupoid;
    return this.API.getTypeRequest(url);
  }

  postAddGrupo(grupo:Grupo){
    const url='grupo/register?CodEquipo='+grupo.CodEquipo
              +'&CodAlumnoGuia='+grupo.CodAlumno;
    return this.API.postTypeRequest(url);
  }

  postDeleteGrupo(grupo:Grupo){
    const url='grupo/delete?CodEquipo='+grupo.CodEquipo
              +'&CodAlumnoGuia='+grupo.CodAlumno;
    return this.API.postTypeRequest(url);
  }

}
