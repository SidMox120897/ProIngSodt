import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  constructor() { }

  menuitem:string[]=['editar','mostrar'];
  
  ngOnInit(): void {
  }

}
