import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from '../modelos/usuario.model';
import { EmpresaService } from './empresa.service';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: String;
  public token: any;
  public identidad: any;
  public empleado: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient, public _empresaService: EmpresaService) {
    this.url = GLOBAL.url , this.token = this._empresaService.getToken(); }

  registroEmpleado(empleado: Usuario, token: any): Observable<any>{
    let params = JSON.stringify(empleado);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())
    return this._http.post(this.url + "registrarUsuario", params , {headers: headersToken})
  }
  verEmpleados(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.get(this.url + "verEmpleados",  {headers: headersToken});

  }
  obtenerEmpleado(id: String, token: any): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.get(this.url +"obtenerEmpleado/" + id, {headers: headersToken})
  }
  editarEmpleado(empresa: Usuario, token: any): Observable<any>{
    let params = JSON.stringify(empresa);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.put(this.url + "editarUsuario", params , {headers: headersToken})
  }

  eliminarEmpleado(empleado: any): Observable<any>{
    let params = JSON.stringify(empleado);
    return this._http.post(this.url + "eliminarUsuario", params, {headers: this.headersVariable})
  }

  obtenerEmpleadoNombre(nombre: any , token: any): Observable<any>{
    let params = JSON.stringify(nombre);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url+'obtenerUsuarioNom', params, {headers: headersToken});
  }
  obtenerEmpleadoNombre2(nombre: any, token: any): Observable<any>{
    let params = JSON.stringify(nombre);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url+'obtenerEmpleadoNombre', params, {headers: headersToken});
  }
  obtenerGeneral(nombre: any, token: any): Observable<any>{
    let params = JSON.stringify(nombre);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url+'obtenerGeneral', params, {headers: headersToken});
  }

  getToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != "undefined"){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
  getEmpleados(){
    var empleado2 = JSON.parse(localStorage.getItem("empleadoSeleccionado")||"{}");
    if(empleado2 != "undefined"){
      this.empleado = empleado2;
    }else {
      this.empleado = null;
    }
    return this.empleado;
  }
}
