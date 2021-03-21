import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RemoveSweetComponent } from './remove-sweet/remove-sweet.component';


@NgModule({
  declarations: [DashboardComponent, RemoveSweetComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
  ]
})
export class AdminModule { }
