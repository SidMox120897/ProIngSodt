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
    iduser:'',
    nickname:'',
    nameuser:'',
    surname:'',
    password:"123456789"
  } as Admin;


  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.urlID=params['id'];
      }
    });
    
    if(this.urlID!==''){
      console.log(this.urlID);
      this.adminServi.getAdmin(this.urlID).subscribe((res)=>{
        this.admin=res[0];
      });
    this.passwordB='123456789';
    }
  }

  /* Funciones */

  add(){    
    console.log("mox");
    var respuesta;
    this.adminServi.postAddAdmin(this.admin).subscribe((res)=>{
      respuesta=res;
      console.log(res);
    });
    console.log("mox");
  }

}
