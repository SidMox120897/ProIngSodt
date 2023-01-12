import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/interfaces/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-mostrar-grupo',
  templateUrl: './mostrar-grupo.component.html',
  styleUrls: ['./mostrar-grupo.component.css']
})
export class MostrarGrupoComponent implements OnInit {

  constructor(private grupoServi:GrupoService) { }
  headerTable:string[]=['Codigo Equipo','Codigo Alumno'];
  bodyObject:Grupo[]=[];

  toBody(){
    const body:any=[];
    this.bodyObject.forEach(e => {
      body.push([e.CodEquipo,e.CodAlumno]);
    });
    return body;
  }

  ngOnInit(): void {
    this.grupoServi.getallGrupo().subscribe((res)=>{
      this.bodyObject=res;
    });
  }

}
