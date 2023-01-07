import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/interfaces/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private route:ActivatedRoute, private adminServi:AdminService) { }

  urlID='';

  passwordB:string='123456789';

  admin:Admin={
    iduser:"",
    nickname:"",
    nameuser:"",
    surname:"",
    password:"123456789"
  };


  ngOnInit(): void {
    this.route.params.subscribe((params)=>this.urlID=params['id']);
    this.admin={
      iduser:"",
      nickname:"",
      nameuser:"",
      surname:"",
      password:"123456789"
    } as Admin;
    if(this.urlID!==''){
      this.adminServi.getAdmin(this.urlID).subscribe((res)=>{
        this.admin=res[0];
      });
    this.passwordB='123456789';
    }
  }

  /* Funciones */

  add(){
    // var respuesta;
    // this.adminServi.postAddAdmin(this.admin).subscribe((res)=>{
    //   respuesta=res;
    //   console.log(res);
    // });
    console.log("mox");
  }

}
