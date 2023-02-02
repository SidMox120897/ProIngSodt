import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Docente } from 'src/app/interfaces/docente';
import { DocenteService } from 'src/app/services/docente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private docServi:DocenteService) { }
  urlID='';

  passwordB:string='123456789';

  doc:Docente={
    CodDocente:'',
    nameDocente:'',
    nameuser:'',
    surname:'',
    correo:'',
    phone:'',
    password:''
  } as Docente;



  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.urlID=params['id'];
      }
    });

    if(this.urlID!==''){
      console.log(this.urlID);
      this.docServi.getDocente(this.urlID).subscribe((res)=>{
        this.doc=res[0];
      });
    this.passwordB='';
    }
  }

  add(){    
    var respuesta;
    this.docServi.postAddDocente(this.doc).subscribe((res)=>{
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
          title:'Booyahh!!! Agrego el docente',
          text: res.respuesta
        });
        console.log(res.respuesta);
      }
    });
  }

}
