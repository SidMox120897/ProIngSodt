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

  Admin:Admin={} as Admin;
  Doc:Docente={} as Docente;

  constructor(
    private docServi:DocenteService,
    private AdminServi:AdminService
    ) { }
}
