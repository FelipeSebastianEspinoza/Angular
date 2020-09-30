import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImageFormComponent } from './components/image-form/image-form.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImagesService } from './services/images.service';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ImageFormComponent,
    ImageListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
