import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-mostrar-alumno',
  templateUrl: './mostrar-alumno.component.html',
  styleUrls: ['./mostrar-alumno.component.css']
})
export class MostrarAlumnoComponent implements OnInit {

  constructor(private alumServi:AlumnoService) { }

  headerTable:string[]=['ID','Nombre','Apellido','Correo','celular'];
  bodyObject:Alumno[]=[];

  toBody(){
    const body:any=[];
    this.bodyObject.forEach(e => {
      body.push([e.CodAlumno,e.nameAlumno,e.surname,e.correo, e.phone]);
    });
    return body;
  }


  ngOnInit(): void {
    this.alumServi.getallAlumno().subscribe((res)=>{
      this.bodyObject=res;
    });
  }

}
