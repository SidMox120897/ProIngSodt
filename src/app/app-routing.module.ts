import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './usuario/components/admin/admin.component';
import { AlumnoComponent } from './usuario/components/alumno/alumno.component';
import { DocenteComponent } from './usuario/components/docente/docente.component';
import { GrupoComponent } from './usuario/components/grupo/grupo.component';
import { WelcomeComponent } from './usuario/components/welcome/welcome.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarComponent } from './usuario/components/admin/editar/editar.component';
import { MostrarComponent } from './usuario/components/admin/mostrar/mostrar.component';
import { LoginComponent } from './usuario/components/login/login.component';
import { EditarDocenteComponent } from './usuario/components/docente/editar-docente/editar-docente.component';
import { MostrarDocenteComponent } from './usuario/components/docente/mostrar-docente/mostrar-docente.component';
import { EditarAlumnoComponent } from './usuario/components/alumno/editar-alumno/editar-alumno.component';
import { MostrarAlumnoComponent } from './usuario/components/alumno/mostrar-alumno/mostrar-alumno.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UsuarioComponent,
    children:[
      {
        path:'welcome',
        component:WelcomeComponent
      },
      {
        path:'admin',
        component:AdminComponent,
        children:[
          {
            path:'editar',
            component:EditarComponent
          },
          {
            path:'editar/:id',
            component:EditarComponent
          },
          {
            path:'mostrar',
            component:MostrarComponent
          }
        ]
      },
      {
        path:'docente',
        component:DocenteComponent,
        children:[
          {
            path:'editar',
            component:EditarDocenteComponent
          },
          {
            path:'editar/:id',
            component:EditarDocenteComponent
          },
          {
            path:'mostrar',
            component:MostrarDocenteComponent
          }
        ]
      },
      {
        path:'alumno',
        component:AlumnoComponent,
        children:[
          {
            path:'editar',
            component:EditarAlumnoComponent
          },
          {
            path:'editar/:id',
            component:EditarAlumnoComponent
          },
          {
            path:'mostrar',
            component:MostrarAlumnoComponent
          }
        ]
      },
      {
        path:'grupo',
        component:GrupoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
