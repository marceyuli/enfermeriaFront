import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public _http: HttpClient;
  public baseService: BaseService;

  constructor(
    _http: HttpClient,

  ) {
    this._http = _http;
    this.baseService = new BaseService(_http);
  }
  getAll(): Observable<any> {
    return this.baseService.get("usuario");
  }
  login(usuario: any): Observable<any> {
    return this.baseService.post("login", usuario);
  }
}
