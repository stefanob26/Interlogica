import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SouthAfricaMobileNumberComponent} from './south-africa-mobile-number/south-africa-mobile-number.component';
import {ViewRemoteNumberComponent} from './view-remote-number/view-remote-number.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, SouthAfricaMobileNumberComponent, ViewRemoteNumberComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxDatatableModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {
}
