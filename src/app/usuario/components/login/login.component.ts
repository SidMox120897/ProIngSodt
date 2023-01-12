import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserService) { }

  id:string='';
  password:string='';

  ngOnInit(): void {
  }

  logear(){
    console.log("logueando");
    this.user.loggear(this.id,this.password);
    console.log("logueado: "+this.user.respuesta);
    console.log(this.user.respuesta.resultado)
  }
}
