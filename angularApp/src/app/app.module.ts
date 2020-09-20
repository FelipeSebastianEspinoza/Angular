import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { FelipeComponent } from './felipe/felipe.component';

const routes: Route[] = [

  { path: '', component: FelipeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TablaPersonasComponent,
    UserComponent,
    AboutComponent,
    FelipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],

  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
