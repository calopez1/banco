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
import { UsuariosService } from "../services/usuarios.service";
import { Sesion } from '../modelo/sesion'
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent implements OnInit {

  numeroCuenta: String;
  valor: number;
  transaccion: Transaccion;
  transacciones: Transaccion[];
  responseDTO: ResponseDTO;
  usuarioSeleccionado : String;
  identificacion: string;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

  }

  

  constructor(private transaccionService: TransaccionService,private router: Router,
    private location: Location, private messageService: MessageService,private http: HttpClient,
   private usuarioService: UsuariosService, public sesionService: Sesion) {

    this.numeroCuenta = "";
    this.valor = 0;
    this.transaccionService = new TransaccionService(http, messageService);
    this.transaccion = new Transaccion;
    this.responseDTO = new ResponseDTO;
    this.identificacion = "";

    if(Sesion.role == null){
      this.router.navigate(['/login']);
    }


    console.log(Sesion.role);
    this.transaccion.usuUsuario_Usuario = Sesion.role;
   
  }

  ngOnInit() {
  }


  consignar(){

    console.log(this.numeroCuenta);
    console.log(this.valor);

    this.messageService.clear();

    this.transaccion.valor = this.valor;
    this.transaccion.cuenId_Cuenta = this.numeroCuenta;
    this.transaccion.titrId_TipoTransaccion = 2;
    this.transaccion.identificacion = this.identificacion;

    console.log(this.transaccion.usuUsuario_Usuario);

    this.transaccionService.crearTransaccion(this.transaccion).subscribe(usuarios => {
      this.responseDTO = usuarios

      if(this.responseDTO.codigo == '1'){

        
        this.messageService.add("Transacción realizada satisfactoriamente");
        this.valor = 0;
        this.numeroCuenta = "";
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
