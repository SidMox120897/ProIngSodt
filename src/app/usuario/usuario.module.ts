import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './components/shared/nav/nav.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { TablesComponent } from './components/shared/tables/tables.component';
import { AdminComponent } from './components/admin/admin.component';
import { DocenteComponent } from './components/docente/docente.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { UsuarioComponent } from './usuario.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditarComponent } from './components/admin/editar/editar.component';
import { MostrarComponent } from './components/admin/mostrar/mostrar.component';
import { LoginComponent } from './components/login/login.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { EditarAlumnoComponent } from './components/alumno/editar-alumno/editar-alumno.component';
import { MostrarAlumnoComponent } from './components/alumno/mostrar-alumno/mostrar-alumno.component';
import { MostrarDocenteComponent } from './components/docente/mostrar-docente/mostrar-docente.component';
import { EditarDocenteComponent } from './components/docente/editar-docente/editar-docente.component';
import { EditarEquipoComponent } from './components/equipo/editar-equipo/editar-equipo.component';
import { EditarGrupoComponent } from './components/grupo/editar-grupo/editar-grupo.component';
import { MostrarEquipoComponent } from './components/equipo/mostrar-equipo/mostrar-equipo.component';
import { MostrarGrupoComponent } from './components/grupo/mostrar-grupo/mostrar-grupo.component';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    TablesComponent,
    AdminComponent,
    DocenteComponent,
    AlumnoComponent,
    GrupoComponent,
    UsuarioComponent,
    WelcomeComponent,
    EditarComponent,
    MostrarComponent,
    LoginComponent,
    EquipoComponent,
    EditarAlumnoComponent,
    MostrarAlumnoComponent,
    MostrarDocenteComponent,
    EditarDocenteComponent,
    EditarEquipoComponent,
    EditarGrupoComponent,
    MostrarEquipoComponent,
    MostrarGrupoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class UsuarioModule { }
