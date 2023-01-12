import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/interfaces/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-mostrar-equipo',
  templateUrl: './mostrar-equipo.component.html',
  styleUrls: ['./mostrar-equipo.component.css']
})
export class MostrarEquipoComponent implements OnInit {

  constructor(private equipoServi:EquipoService) { }

  headerTable:string[]=['Codigo Equipo','Codigo Docente','Codigo Alumno Guia','Nombre Equipo','temas','Descripcion'];
  bodyObject:Equipo[]=[];

  toBody(){
    const body:any=[];
    this.bodyObject.forEach(e => {
      body.push([e.CodEquipo,e.CodDocente,e.CodAlumnoGuia,e.nombreEquipo, e.temas, e.descripcion]);
    });
    return body;
  }

  ngOnInit(): void {
    this.equipoServi.getallEquipo().subscribe((res)=>{
      this.bodyObject=res;
    });
  }

}
