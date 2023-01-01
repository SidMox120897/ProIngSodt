import { Alumno } from "./alumno";
import { Docente } from "./docente";

export interface Equipo {
  id:String;
  name:String;
  alumnoGuia:Alumno;
  Docente:Docente;
  Descripcion:String;
  Factor:String;
}
