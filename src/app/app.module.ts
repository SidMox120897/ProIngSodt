import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageModule } from './main-page/main-page.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ApiService } from './services/api.service';
import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    MainPageModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
