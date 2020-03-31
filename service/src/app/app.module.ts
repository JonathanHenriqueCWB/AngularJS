import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursoModule } from './curso/curso.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule // Linha adicionada
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
