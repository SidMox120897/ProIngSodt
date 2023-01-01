import { Alumno } from "./alumno";
import { Equipo } from "./equipo";

export interface Grupo {
  equipo:Equipo;
  alumnos:Alumno[];
}
