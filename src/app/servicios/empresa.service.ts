import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/usuario.model';
import { Empresa } from '../modelos/empresa.model';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {
  public url: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;
  public gestor: any;
  public Empresa: any;
  constructor(public _http: HttpClient) {
  this.url = GLOBAL.url
  }

  login(empresa: any, getToken:any ): Observable<any>{
    if(getToken != null){
      empresa.getToken = getToken;
    }
    let params = JSON.stringify(empresa);
    return this._http.post(this.url + "login", params , {headers: this.headersVariable});
  }

  registroEmpresa(empresa: Empresa,  token: any): Observable<any>{
    let params = JSON.stringify(empresa);
    let headersToken = this.headersVariable.set("Authorization", token);

    return this._http.post(this.url + "registrarEmpresa", params, {headers: headersToken})
  }
  obtenerEmpresas( token: any): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", token);

    return this._http.get(this.url + "obtenerEmpresas", {headers: headersToken})
  }
  obtenerEmpresa(id: String, token: any): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.get(this.url +"obtenerEmpresaID/" + id, {headers: headersToken})
  }

  editarEmpresa(empresa: Empresa, token: any): Observable<any>{
    let params = JSON.stringify(empresa);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.put(this.url + "editarEmpresa", params , {headers: headersToken})
  }

  eliminarEmpresa(empresa: any): Observable<any>{
    let params = JSON.stringify(empresa);
    return this._http.post(this.url + "eliminarEmpresa", params, {headers: this.headersVariable})
  }

  verCuenta() : Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());
    return this._http.get(this.url + 'verCuenta', {headers: headersToken});
   }
  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem("identidad") ||"{}");
    if(identidad2 != "undefined"){
      this.identidad = identidad2;
    }else {
      this.identidad = null;
    }
    return this.identidad;
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




}
