import {SouthAfricaMobileNumberComponent} from './south-africa-mobile-number/south-africa-mobile-number.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewRemoteNumberComponent} from './view-remote-number/view-remote-number.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: SouthAfricaMobileNumberComponent},
  {path: 'remote', component: ViewRemoteNumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
