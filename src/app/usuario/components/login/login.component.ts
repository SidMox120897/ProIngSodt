import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private controlServi:ControlService) { }

  userdata:any={};
  id:string='';
  password:string='';

  ngOnInit(): void {
  }

  logear(){
    console.log(this.id);
    console.log(this.password);
    this.controlServi.cargarUser(this.id,this.password);
    if(this.controlServi.AdminBool){
      this.userdata=this.controlServi.admin;
      console.log("mox");
      console.log(this.userdata);
    }else{
      if(this.controlServi.DocBool){
        this.userdata=this.controlServi.Doc;
        console.log("mox");
        console.log(this.userdata);
      }else{
        Swal.fire({
          icon:'error',
          title:'Oopss!!!',
          text: this.controlServi.Err
        });
      }
    }
  }
}
