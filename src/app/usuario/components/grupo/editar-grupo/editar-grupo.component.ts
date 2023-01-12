import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grupo } from 'src/app/interfaces/grupo';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-editar-grupo',
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css']
})
export class EditarGrupoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private grupoServi:GrupoService) { }

  urlID='';

  grupo:Grupo={
    CodEquipo:'',
    CodAlumno:''
  } as Grupo;

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.urlID=params['id'];
      }
    });
    if(this.urlID!==''){
      console.log(this.urlID);
      this.grupoServi.getGrupo(this.urlID).subscribe((res)=>{
        console.log(res);
        this.grupo=res[0];
      });
    }
  }

  add(){}

}
