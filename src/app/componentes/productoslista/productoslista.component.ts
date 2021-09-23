import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { ProductosService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productoslista',
  templateUrl: './productoslista.component.html',
  styleUrls: ['./productoslista.component.scss'],
  providers: [ProductosService, EmpresaService]
})
export class ProductoslistaComponent implements OnInit {
  public token: String;
  public idEmpleados =  ''
  public productoModel: Producto;
  public listaProducto: any;
  public empleados: any;

  constructor(public _productosService: ProductosService, private _empresaService: EmpresaService,
    private _router: Router) {
    this.token = this._empresaService.getToken();
    this.productoModel = new Producto("","","","","","");
   }
  ngOnInit(): void {
    this.mostrarProductos();
    this.verProductos();

  }

  verProductos(){
    this._productosService.verProductos().subscribe(
      response=>{
        this.listaProducto = response.productoEncontradas;
        console.log(response.productoEncontradas)
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

  editarProducto(){
    this._productosService.editarProducto(this.productoModel, this.token).subscribe(
     response => {
     console.log(response);
     this.verProductos();

    })
  }
  eliminarProducto(){
   this._productosService.eliminarProducto(this.productoModel, this.token).subscribe(
     response => {
       console.log(response)
       this.verProductos();
     }
   )

  }

}
