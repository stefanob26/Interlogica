import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { SweetShowGridComponent } from './sweet-show-grid/sweet-show-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AddSweetComponent } from './admin/add-sweet/add-sweet.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { SweetInfoComponent } from './sweet-info/sweet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SweetShowGridComponent,
    AddSweetComponent,
    LoginComponent,
    SweetInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    NgxDropzoneModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
