import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private API:ApiService) { }

  getallEquipo(){
    const url='equipo/allin';
    return this.API.getTypeRequest(url);
  }

  getEquipo(equipoid:string){
    const url='equipo/search?CodEquipo='+equipoid;
    return this.API.getTypeRequest(url);
  }

  postAddEquipo(equipo:Equipo){
    const url='equipo/register?CodEquipo='+equipo.CodEquipo
              +'&CodDocente='+equipo.CodDocente
              +'&CodAlumnoGuia='+equipo.CodAlumnoGuia
              +'&nombreEquipo='+equipo.nombreEquipo
              +'&temas='+equipo.temas
              +'&descripcion='+equipo.descripcion;
    return this.API.postTypeRequest(url);
  }

  postDeleteEquipo(equipoid:string){
    const url='equipo/delete?CodEquipo='+equipoid;
    return this.API.postTypeRequest(url);
  }

}
