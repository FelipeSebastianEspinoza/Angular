import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UsuariosComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule,MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
