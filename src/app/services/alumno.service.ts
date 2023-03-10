import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private API:ApiService) { }

  getallAlumno(){
    const url='alumno/allin';
    return this.API.getTypeRequest(url);
  }

  getAlumno(Alumid:String){
    const url='alumno/search?CodAlumno='+Alumid;
    return this.API.getTypeRequest(url);
  }


  postAddAlumno(alumno:Alumno){
    const url='alumno/register?CodAlumno='+alumno.CodAlumno
                              +'&nameAlumno='+alumno.nameAlumno
                              +'&surname='+alumno.surname
                              +'&correo='+alumno.correo
                              +'&phone='+alumno.phone;
    return this.API.postTypeRequest(url);
  }

  postDeleteAlumno(Alumid:String){
    const url='alumno/delete?CodAlumno='+Alumid;
    return this.API.postTypeRequest(url);
  }
  
}
