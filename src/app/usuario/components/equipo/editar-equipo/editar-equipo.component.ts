import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/interfaces/equipo';
import { EquipoService } from 'src/app/services/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.css']
})
export class EditarEquipoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private equipoServi:EquipoService) { }

  urlID='';

  equipo:Equipo={
    CodEquipo:'',
    CodDocente:'',
    CodAlumnoGuia:'',
    nombreEquipo:'',
    temas:'',
    descripcion:''
  } as Equipo;

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.urlID=params['id'];
      }
    });
    
    if(this.urlID!==''){
      console.log(this.urlID);
      this.equipoServi.getEquipo(this.urlID).subscribe((res)=>{
        console.log(res);
        this.equipo=res[0];
      });
    }
  }

  add(){
    console.log(this.equipo);
    var respuesta;
    this.equipoServi.postAddEquipo(this.equipo).subscribe((res)=>{
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
