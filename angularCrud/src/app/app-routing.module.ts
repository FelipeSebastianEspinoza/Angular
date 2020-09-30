import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/images',
    pathMatch: 'full',
  },
  {
    path: 'images',
    component: ImageListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
