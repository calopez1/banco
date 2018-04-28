import { Component } from '@angular/core';
import { Usuario } from './modelo/usuario';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Usuario : Array<Usuario>;

  constructor(private htttp:Http){

  }

}
