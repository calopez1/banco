import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { reject } from 'q';
import { resolve } from 'url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Usuario} from "../modelo/usuario";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UsuariosService {

  private usuarioUrl = 'http://127.0.0.1:8080/bancoWeb/rest/controllers/usuario/getDataUsuario';
  private usuarioLoginUrl = 'http://127.0.0.1:8080/bancoWeb/rest/controllers/usuario/getUsuario';
  public usuario_login: string;

  constructor( private http: HttpClient, private messageService: MessageService){ 
 
  }

  getUsarios(): Observable<Usuario[]> {
    console.log(this.http.get<Usuario[]>(this.usuarioUrl));
    return this.http.get<Usuario[]>(this.usuarioUrl).pipe(
      tap(usuarios => this.log(`fetched usuario`)),
      catchError(this.handleError('getUsuario', []))
    );
  }

  getUsuario(usuUsuario: String): Observable<Usuario> {
    
    const url = `${this.usuarioLoginUrl}/${usuUsuario}`;
    return this.http.get<Usuario>(url).pipe(
      catchError(this.handleError<Usuario>(`getUsuario id=${usuUsuario}`))
    );
  }
 

  private log(message: string): string {
    this.messageService.add('Usuario Service: ' + message);
    return message;
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
