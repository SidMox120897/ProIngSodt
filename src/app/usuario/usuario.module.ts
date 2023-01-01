import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
import { FormsModule } from '@angular/forms';



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
    EquipoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class UsuarioModule { }
