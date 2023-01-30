// Constantes
const idPreg=<HTMLInputElement>document.getElementById("rpta1");
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  logmain(){
    console.log("Hello world");
  }
  add1(){
    const idPreg=<HTMLInputElement>document.getElementById("rpta1");
    //const idPreg1=<HTMLInputElement><unknown>document.getElementsByName("preg1");
    //const idPreg=<HTMLInputElement>document.getElementById("prt1");
    //console.log(idPreg1.value);
    console.log(idPreg.value);
    this.logmain();
    }
  
}

