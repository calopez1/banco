import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import { ConsignarComponent } from './consignar/consignar.component';
import { RetirarComponent } from './retirar/retirar.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsuariosService } from "./services/usuarios.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { HttpClient } from '@angular/common/http';
import { TransaccionService } from './services/transaccion.service';
import { Sesion } from './modelo/sesion'

@NgModule({
  declarations: [
    AppComponent,
    ConsignarComponent,
    RetirarComponent,
    LoginComponent,
    PrincipalComponent,
    MessagesComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [UsuariosService, MessageService, TransaccionService, Sesion],
  bootstrap: [AppComponent]
})
export class AppModule { }
