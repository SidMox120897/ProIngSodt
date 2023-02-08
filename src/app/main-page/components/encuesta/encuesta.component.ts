import { Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  constructor() { 
    
  }
  ngOnInit(): void {
  }
  // Desactivamos botones marcados
  dBtnTodo(){
    let ids: string[] = ["rpta55","rpta56","rpta57","rpta58","rpta59"];
    let tamanio: number=ids.length;
    for (let i = 0; i < tamanio; i++){
      // Obtenemos los id de los respuestas
      let val: string=ids[i];
      // Obtenemos la respuestas del formulario
      let valor=<HTMLInputElement>document.getElementById(val);
      valor.checked = false; 
    }
  }
  adBtn(){
    // Cuando las anteriores alternativas genera conflicto, deseclecciona
    let valor=<HTMLInputElement>document.getElementById("rpta60");
    if(valor.checked){
      valor.checked = false
    } 
    return true;
  }
  add1(){
    // Obtenemos todos los constantes
    let ids: string[] = ["rpta1","rpta2","rpta3","rpta4","rpta5","rpta6","rpta7","rpta8","rpta9","rpta10","rpta11","rpta12","rpta13","rpta14","rpta15","rpta16","rpta17","rpta18","rpta19","rpta20","rpta21","rpta22","rpta23","rpta24","rpta25","rpta26","rpta27","rpta28","rpta29","rpta30","rpta31","rpta32","rpta33","rpta34","rpta35","rpta36","rpta37","rpta38","rpta39","rpta40","rpta41","rpta42","rpta43","rpta44","rpta45","rpta46","rpta47","rpta48","rpta49","rpta50","rpta51","rpta52","rpta53","rpta54","rpta55","rpta56","rpta57","rpta58","rpta59","rpta60","rpta61","rpta62","rpta63","rpta64","rpta65","rpta66","rpta67","rpta68","rpta69","rpta70"];
    // Obtenemos el tamanio
    let tamanio: number=ids.length;
    // Aqui se guarda todas las respuestas
    let valores: number[]=[];
    let respuesta: number;
    // push parseInt('123', 10)
    for (let i = 0; i < tamanio; i++){
      // Obtenemos los id de los respuestas
      let val: string=ids[i];
      // Obtenemos la respuestas del formulario
      let valor=<HTMLInputElement>document.getElementById(val); 
      // verificamos que no sea nul0
      if(valor!=null){
        // verificamos las casillas vacias que esten marcadas
        if (valor.checked){
          // Convertimos nuestro valor a numero
          respuesta=parseInt(valor.value,10);
          //console.log(respuesta);
          // Agregamos los elemntos y respuestas a nuestro arreglo
          valores.push(respuesta);
        }
      }
    }
    // Los pesos por cada pregunta para determinar un porcentaje
    let puntajes: number[]=[25,1,1,1,2,5,3,7,1,9,12,2,2,2,5,2,2,14,2,2];
    // Recuperamos los datos anteriores, y agregar
    let puntaje: number=0.0;
   // Probabilidad de desercion
    for (let i = 0; i < puntajes.length; i++){
      puntaje=puntaje+puntajes[i]*valores[i];
      }
    // Mostramos un mensaje si es que no se han marcado todas las preguntas
    if(Number.isNaN(puntaje)){
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Existen preguntas no marcadas!',
      confirmButtonText: 'Reintentar'
      // footer: '<a href="">Why do I have this issue?</a>'
      })
    } 
    else{
      // Si el alumno puede desertar por alguna circunstancia
      if(puntaje>51){
        // alert("Tienes una probabilidad de deserción de : "+(puntaje)+" %");
        Swal.fire({
          title:"Tienes una probabilidad de deserción de : "+(puntaje)+" %",
          text:'¿Te ayudamos con el problema que presentas?',
          icon:'error',
          footer: '<a href="http://localhost:4200/user">Buscar de grupo de auto ayuda</a>',
          showDenyButton: true,
          //showCancelButton: true,
          confirmButtonColor:'#3085d6',
          denyButtonColor: '#3085d6',
          confirmButtonText: 'Si Deseo',
          denyButtonText: "No Deseo",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            window.location.href ="http://localhost:4200/search"
          } else if (result.isDenied) {
            window.location.href ="http://localhost:4200/"
          }
        })
      }
      // Si el alumno no presente problemas de deserción
      else{ 
        Swal.fire({
        title:'Felicidades!',
        text:'Usted no presenta problemas de deserción.',
        icon:'success'
        }).then((result) => {
          window.location.href ="http://localhost:4200/"
        })
      }
    }
  } 
}

