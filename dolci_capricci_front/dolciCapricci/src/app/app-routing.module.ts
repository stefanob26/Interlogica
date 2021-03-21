import { SweetInfoComponent } from './sweet-info/sweet-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SweetShowGridComponent } from './sweet-show-grid/sweet-show-grid.component';
import { Sweet } from 'src/models/sweet';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: SweetShowGridComponent },
  { path: 'sweet', component: SweetInfoComponent, data: { sweet: Sweet } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
