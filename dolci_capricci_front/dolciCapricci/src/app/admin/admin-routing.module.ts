import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddSweetComponent} from './add-sweet/add-sweet.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RemoveSweetComponent} from './remove-sweet/remove-sweet.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {path: '', component: DashboardComponent},
      {
        path: 'add-sweet',
        component: AddSweetComponent,
      },
      {
        path: 'remove-sweet',
        component: RemoveSweetComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
