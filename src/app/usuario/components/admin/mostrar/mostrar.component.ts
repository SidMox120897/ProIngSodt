import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interfaces/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  constructor(private adminServi:AdminService) { }

  headerTable:string[]=['ID','Nickname','Nombre','Apellido','password'];
  bodyObject:Admin[]=[];

  toBody(){
    const body:any=[];
    this.bodyObject.forEach(e => {
      body.push([e.iduser,e.nameuser,e.surname,e.nickname, e.password]);
    });
    return body;
  }

  ngOnInit(): void {
    this.adminServi.getallAdmin().subscribe((res)=>{
      this.bodyObject=res;
    });
  }

}
