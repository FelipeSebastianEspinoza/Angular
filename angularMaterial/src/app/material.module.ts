import { ngModuleJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
@NgModule({
  imports: [MatButtonModule, MatCardModule,MatButtonToggleModule],
 
  exports: [MatButtonModule, MatCardModule,MatButtonToggleModule],
})
export class MaterialModule {}
