import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/interfaces/equipo';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private equipoServi:EquipoService) { }
  bodyObject:Equipo[]=[];

  ngOnInit(): void {
    this.equipoServi.getallEquipo().subscribe((res)=>{
      this.bodyObject=res;
    });
  }
}
