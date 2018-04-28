import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Location } from '@angular/common';
import { RetirarComponent } from "../retirar/retirar.component";
import { ConsignarComponent } from "../consignar/consignar.component";
import { Sesion } from '../modelo/sesion';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router,
    private location: Location, public sesionService: Sesion) {

      if(Sesion.role == null){
        
        this.router.navigate(['/login']);
      }

     }

  ngOnInit() {
  }

  irConsignar(){
    this.router.navigate(['/consignar']);
  }

  irRetirar(){
    this.router.navigate(['/retirar']);
  }

  irInicio(){

    this.router.navigate(['/login']);
  }

}
