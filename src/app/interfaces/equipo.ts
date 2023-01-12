import { Alumno } from "./alumno";
import { Docente } from "./docente";

export interface Equipo {
  CodEquipo:String;
  CodDocente:String;
  CodAlumnoGuia:String;
  nombreEquipo:String;
  temas:String;
  descripcion:String;
}
