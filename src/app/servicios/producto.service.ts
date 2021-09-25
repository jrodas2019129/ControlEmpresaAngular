import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto.model';

import { Usuario } from '../modelos/usuario.model';
import { EmpresaService } from './empresa.service';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url: String;
  public token: any;
  public identidad: any;
  public producto: any;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient, public _empresaService: EmpresaService) {
    this.url = GLOBAL.url , this.token = this._empresaService.getToken(); }

  registroProducto(producto: Producto, token: any): Observable<any>{
    let params = JSON.stringify(producto);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())
    return this._http.post(this.url + "registrarProducto", params , {headers: headersToken})
  }
  verProductos(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.get(this.url + "verProductos",  {headers: headersToken});

  }
  obtenerProducto(id: String, token: any): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.get(this.url +"obtenerProducto/" + id, {headers: headersToken})
  }
  editarProducto(producto: Producto, token: any): Observable<any>{
    let params = JSON.stringify(producto);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.put(this.url + "editarProducto", params , {headers: headersToken})
  }

  eliminarProducto(producto: any): Observable<any>{
    let params = JSON.stringify(producto);
    return this._http.post(this.url + "eliminarProductoNombre", params, {headers: this.headersVariable})
  }
  ventaProducto(producto: any): Observable<any>{
    let params = JSON.stringify(producto);
    return this._http.post(this.url + "ventaProductos", params , {headers: this.headersVariable})
  }
  AumentoProducto(producto: any): Observable<any>{
    let params = JSON.stringify(producto);
    return this._http.post(this.url + "aumentarProductos", params , {headers: this.headersVariable})
  }
  obtenerGeneralProducto(nombre: any, token: any): Observable<any>{
    let params = JSON.stringify(nombre);
    let headersToken = this.headersVariable.set("Authorization", token);
    return this._http.post(this.url+'obtenerGeneralProducto', params, {headers: headersToken});
  }

  obtenerProductosCantidadMayor(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.get(this.url + "obtenerProductosCantidadMayor",  {headers: headersToken});

  }
  obtenerProductosCantidadMenor(): Observable<any>{
    let headersToken = this.headersVariable.set("Authorization", this.token);
    return this._http.get(this.url + "obtenerProductosCantidadMenor",  {headers: headersToken});

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
  getProductos(){
    var producto2 = JSON.parse(localStorage.getItem("empleadoSeleccionado")||"{}");
    if(producto2 != "undefined"){
      this.producto = producto2;
    }else {
      this.producto = null;
    }
    return this.producto;
  }
}