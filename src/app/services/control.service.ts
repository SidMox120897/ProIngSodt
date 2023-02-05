import { Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin';
import { Docente } from '../interfaces/docente';
import { AdminService } from './admin.service';
import { DocenteService } from './docente.service';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  DocBool:boolean=false;
  AdminBool:boolean=false;

  admin:Admin={} as Admin;
  Doc:Docente={} as Docente;

  constructor(
    private docServi:DocenteService,
    private AdminServi:AdminService
    ) { }

  cargarUser(id:string,password:string){
    
    this.AdminServi.postLoggerAdmin(id,password).subscribe((res)=>{
      if(res.status===1){
        this.admin=res.respuesta;
      }
    });

    this.docServi.postLoggerDoc(id,password).subscribe((res)=>{
      if(res.status===1){
        this.admin=res.respuesta;
      }
    });
    
  }
}
