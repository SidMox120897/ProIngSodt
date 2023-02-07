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
  Alumnos:Alumno[]=[];
  Docs:Docente[]=[];

  ngOnInit(): void {
    this.equipoServi.getallEquipo().subscribe((res)=>{
      this.Equipos=res;
    });

    this.Equipos.forEach(E => {
      this.docServi.getDocente(E.CodDocente).subscribe((res)=>{
        if(res.data.length===1){
          this.Docs.push(res.data);
          console.log(res.data);
        }else{
          this.Docs.push( {} as Docente );
        }
      });
      this.alumnoServi.getAlumno(E.CodAlumnoGuia).subscribe((res)=>{
        if(res.status===1){
          this.Alumnos.push(res.respuesta);
        }else{
          this.Alumnos.push( {} as Alumno );
        }
      });
    });
    console.log(this.Alumnos);
    console.log(this.Docs);

  }
}
