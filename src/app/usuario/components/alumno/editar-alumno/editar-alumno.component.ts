import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private alumnServi:AlumnoService) { }

  urlID='';

  Alumno:Alumno={
    CodAlumno:'',
    nameAlumno:'',
    surname:'',
    correo:'',
    phone:''
  }as Alumno;

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.urlID=params['id'];
      }
    });
    if(this.urlID!==''){
      console.log(this.urlID);
      this.alumnServi.getAlumno(this.urlID).subscribe((res)=>{
        this.Alumno=res[0];
      });
    }
  }
  
  //Agregar Alumno
  add(){
    var respuesta;
    this.alumnServi.postAddAlumno(this.Alumno).subscribe((res)=>{
      respuesta=res;
      //console.log(res);
      if(res.status===0){
        Swal.fire({
          icon:'error',
          title:'Oopss!!!',
          text: res.respuesta
        });
        console.log(res.respuesta);
      }else{
        Swal.fire({
          icon:'success',
          title:'Booyahh!!! Accedio el docente',
          text: res.respuesta
        });
        console.log(res.respuesta);
      }
    });
  }

}
