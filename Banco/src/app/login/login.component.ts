import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PrincipalComponent } from '../principal/principal.component';
import { ActivatedRoute,  Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Response } from "@angular/http";
import { Usuario } from "../modelo/usuario";
import { MessageService } from '../services/message.service';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sesion } from '../modelo/sesion'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Sesion ] 
})
export class LoginComponent implements OnInit {

  @Input() usuario: string;
  password: String;

  sesion_lo: Sesion;

  api:string;
  myData:Array<Usuario>;
  usuarioConsulta: Usuario;

  constructor(
    private usuarioService: UsuariosService,private router: Router,
    private location: Location, private messageService: MessageService,private http: HttpClient,public sesionService: Sesion) { 
    this.password = "";
    this.usuarioConsulta = new Usuario ;
    this.usuarioService = new UsuariosService(http, messageService);
    //this.usuarioService.getUsuario('').subscribe(usuarios => this.usuarioConsulta = usuarios);
    this.sesion_lo = sesionService;
  }

  ngOnInit() {
  }

  ingresar(){

    this.sesionService.cambiarValor(this.usuario);
    console.log(Sesion.role);
    this.usuarioService.getUsuario(this.usuario).subscribe(usuarios => {
      this.usuarioConsulta = usuarios
      this.messageService.clear();


      if(this.usuarioConsulta != null){
        if(this.usuarioConsulta.usuUsuario == this.usuario && this.usuarioConsulta.clave == this.password){
          this.router.navigate(['/principal']);
        }
 
      }else{
       this.messageService.add('Usuario o contraseña incorrecta');
      }
    
    });
     
    
  }


}
