import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    MainComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NavComponent,
    FooterComponent
  ]
})
export class MainPageModule { }
