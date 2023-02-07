import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { Docente } from 'src/app/interfaces/docente';
import { Equipo } from 'src/app/interfaces/equipo';
import { AlumnoService } from 'src/app/services/alumno.service';
import { DocenteService } from 'src/app/services/docente.service';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private equipoServi:EquipoService,
    private docServi:DocenteService,
    private alumnoServi:AlumnoService) { }

  Equipos:Equipo[]=[];
  

  ngOnInit(): void {
    this.equipoServi.getallEquipo().subscribe((res)=>{
      this.Equipos=res;
    });
  }
}
