import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/interfaces/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-mostrar-docente',
  templateUrl: './mostrar-docente.component.html',
  styleUrls: ['./mostrar-docente.component.css']
})
export class MostrarDocenteComponent implements OnInit {

  constructor(private docServi:DocenteService) { }

  headerTable:string[]=['ID','Nombre','Apellido','Correo','celular'];
  bodyObject:Docente[]=[];

  toBody(){
    const body:any=[];
    this.bodyObject.forEach(e => {
      body.push([e.CodDocente,e.nameDocente,e.surname,e.correo, e.phone,e.password]);
    });
    return body;
  }

  ngOnInit(): void {
    this.docServi.getallDocente().subscribe((res)=>{
      this.bodyObject=res;
    });
  }

}
