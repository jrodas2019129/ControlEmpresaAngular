import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { ProductosService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-menorstock',
  templateUrl: './menorstock.component.html',
  styleUrls: ['./menorstock.component.scss'],
  providers: [ProductosService, EmpresaService]

})
export class MenorstockComponent implements OnInit {
  public token: String;
  public productoModel: any;

  public listaProducto: any;
  public empleados: any;
  public idEmpleados =  ''

  constructor(public _productosService: ProductosService, private _empresaService: EmpresaService,
    private _router: Router) {
      this.token = this._empresaService.getToken();

    }
  ngOnInit(): void {
  

  this.mostrarProductos();
  this.obtenerProductosCantidadMenor();
}
obtenerProductosCantidadMenor(){
  this._productosService.obtenerProductosCantidadMenor().subscribe(
    response=>{
      this.listaProducto = response.productoEncontrado;
      console.log(response.productoEncontrado)
    },
    error=>{
  }
  )
}

mostrarProductos(){
  this._productosService.verProductos().subscribe(
    response=>{
      console.log(response)
      this.empleados=response.productoEncontradas;
    },
    error=>{
      console.log(<any>error)
    }
  )
}
obtenerProducto(_id: any){
  this.idEmpleados=_id;
  this._productosService.obtenerProducto(this.idEmpleados, this.token).subscribe(
    response => {
      this.productoModel = response.producto_registrado
      console.log(response.producto_registrado);
  })

}
}
