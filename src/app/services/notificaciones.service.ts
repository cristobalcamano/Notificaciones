import { Injectable } from '@angular/core';
import {Notificaciones} from '../models/Notificaciones';
import {Paginador} from '../models/Paginador';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  API_URI = 'http://localhost:8081';
  constructor(private http: HttpClient) { }

  getNotificaciones(req:Paginador):Observable<any[]>{
    let params = new HttpParams();
    params=params.append('page',String(req.number));
    params=params.append('size',String(req.size));
    params=params.append('origen',String(req.origen));
    const httpOptions={
      Headers:new HttpHeaders({
        'Accept':'*/*',
        'Content-Type':'application/json'
      }),
      params:params
    }
    return this.http.get<any[]>(this.API_URI+"/comerssia/mails",httpOptions)
  }
}
