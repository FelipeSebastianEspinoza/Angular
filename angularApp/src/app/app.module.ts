import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, TablaPersonasComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
