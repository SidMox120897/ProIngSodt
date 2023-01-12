import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { AlumnoService } from './alumno.service';
import { DocenteService } from './docente.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  respuesta:any;

  constructor(
    private adminServi:AdminService,
    private docServi:DocenteService,
    private alumServi:AlumnoService)
    { }
  
  loggear(id:string,password:string){
    this.adminServi.postLoggerAdmin(id,password).subscribe((res)=>{
      console.log(res);
      this.respuesta={resultado:res,tipo:'admin'}
      console.log(this.respuesta);
    });
  }
}
