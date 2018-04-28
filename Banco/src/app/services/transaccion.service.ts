import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { reject } from 'q';
import { resolve } from 'url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Transaccion } from "../modelo/transaccion";
import { catchError, map, tap } from 'rxjs/operators';
import { ResponseDTO } from '../modelo/responseDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TransaccionService {

  private transaccionUrl = 'http://127.0.0.1:8080/bancoWeb/rest/controllers/transaccion/saveTransaccion';

  constructor(private http: HttpClient, private messageService: MessageService) { 


  }

  /** POST: add a new hero to the server */
crearTransaccion (transaccion: Transaccion): Observable<ResponseDTO> {

  return this.http.post<ResponseDTO>(this.transaccionUrl, transaccion, httpOptions);
}

private log(message: string): string {
  this.messageService.add('Transaccion Service: ' + message);
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
