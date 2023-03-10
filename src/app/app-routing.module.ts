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
import { EquipoComponent } from './usuario/components/equipo/equipo.component';
import { EditarEquipoComponent } from './usuario/components/equipo/editar-equipo/editar-equipo.component';
import { MostrarEquipoComponent } from './usuario/components/equipo/mostrar-equipo/mostrar-equipo.component';
import { EditarGrupoComponent } from './usuario/components/grupo/editar-grupo/editar-grupo.component';
import { MostrarGrupoComponent } from './usuario/components/grupo/mostrar-grupo/mostrar-grupo.component';
import { MainComponent } from './main-page/components/main/main.component';
import { SearchComponent } from './main-page/components/search/search.component';
import { EncuestaComponent } from './main-page/components/encuesta/encuesta.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent,
    children:[
      {
        path:'',
        component:MainComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'encuesta',
        component:EncuestaComponent
      },
      {
        path:'login',
        component:LoginComponent
      }
    ]
  },
  {
    path:'user',
    component:UsuarioComponent,
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'admin',
        component:AdminComponent,
        children:[
          {
            path:'',
            component:EditarComponent
          },
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
            path:'',
            component:EditarDocenteComponent
          },
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
            path:'',
            component:EditarAlumnoComponent
          },
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
        component:GrupoComponent,
        children:[
          {
            path:'',
            component:EditarGrupoComponent
          },
          {
            path:'editar',
            component:EditarGrupoComponent
          },
          {
            path:'editar/:id',
            component:EditarGrupoComponent
          },
          {
            path:'mostrar',
            component:MostrarGrupoComponent
          }
        ]
      },
      {
        path:'equipo',
        component:EquipoComponent,
        children:[
          {
            path:'',
            component:EditarEquipoComponent
          },
          {
            path:'editar',
            component:EditarEquipoComponent
          },
          {
            path:'editar/:id',
            component:EditarEquipoComponent
          },
          {
            path:'mostrar',
            component:MostrarEquipoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
