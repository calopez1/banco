import { Injectable } from "@angular/core";

@Injectable()
export class Sesion {

 public static role: string;


 cambiarValor(valor: string){
    Sesion.role = valor;
 }


}