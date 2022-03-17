import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NotificacionesService } from './services/notificaciones.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import {HttpClientModule}from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NotificacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
