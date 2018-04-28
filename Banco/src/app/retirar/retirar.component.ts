import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Response } from "@angular/http";
import { Transaccion } from "../modelo/transaccion";
import { MessageService } from '../services/message.service';
import { TransaccionService } from '../services/transaccion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseDTO } from "../modelo/responseDTO";
import { Sesion } from '../modelo/sesion';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent implements OnInit {

  numeroCuenta: String;
  valor: number;
  transaccion: Transaccion;
  transacciones: Transaccion[];
  responseDTO: ResponseDTO;
  password: string;
  identificacion: string;

  constructor(private transaccionService: TransaccionService,private router: Router,
    private location: Location, private messageService: MessageService,private http: HttpClient, public sesionService: Sesion) { 

    this.numeroCuenta = "";
    this.valor = 0;
    this.transaccionService = new TransaccionService(http, messageService);
    this.transaccion = new Transaccion;
    this.responseDTO = new ResponseDTO;
    this.password = "";
    this.identificacion = "";
      if(Sesion.role == null){
        this.router.navigate(['/login']);
      }

    }

  ngOnInit() {
  }

  retirar(){

    console.log(this.numeroCuenta);
    console.log(this.valor);

    this.messageService.clear();

    this.transaccion.valor = this.valor;
    this.transaccion.cuenId_Cuenta = this.numeroCuenta;
    this.transaccion.titrId_TipoTransaccion = 1;
    this.transaccion.usuUsuario_Usuario = Sesion.role;
    this.transaccion.clave = this.password;
    this.transaccion.identificacion = this.identificacion;

    this.transaccionService.crearTransaccion(this.transaccion).subscribe(usuarios => {
      this.responseDTO = usuarios

      if(this.responseDTO.codigo == '1'){
        this.messageService.add("Transacción realizada satisfactoriamente");
        this.valor = 0;
        this.numeroCuenta = "";
        this.password = "";
        this.identificacion = "";
      }else if(this.responseDTO.codigo == '0'){
        this.messageService.add(this.responseDTO.mensaje);
      }

    });
     
  }

  irInicio(){

    this.messageService.clear();
    this.router.navigate(['/login']);
  }

  irMenu(){

    this.messageService.clear();
    this.router.navigate(['/principal']);
  }
}
