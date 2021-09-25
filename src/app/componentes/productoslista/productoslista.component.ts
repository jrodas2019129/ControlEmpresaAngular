import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { ProductosService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productoslista',
  templateUrl: './productoslista.component.html',
  styleUrls: ['./productoslista.component.scss'],
  providers: [ProductosService, EmpresaService]
})
export class ProductoslistaComponent implements OnInit {
  public token: String;
  public idEmpleados =  ''
  public productoModel: any;
  public eliminar: any;
  public listaProducto: any;
  public empleados: any;
  public nombreBuscar: any = {nombre: '', nombreProveedor: ''};
  public empleadoSeleccionado: any;


  constructor(public _productosService: ProductosService, private _empresaService: EmpresaService,
    private _router: Router) {
    this.token = this._empresaService.getToken();
    this.productoModel = {_id: '', cantidadVendida: 0, stock: 0};
    this.eliminar = {nombre: ''}
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
  eliminarProducto(nombre){
    this.eliminar.nombre = nombre;
   this._productosService.eliminarProducto(this.eliminar).subscribe(
     response => {
       console.log(response)
       this.verProductos();
     }
   )

  }
  
  ventaProducto(){
    this._productosService.ventaProducto(this.productoModel).subscribe(
      response=>{
        this.empleados = response.productoEditado;
        if(response.productoEditado){
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Venta realizada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.mostrarProductos();
        this.verProductos();
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No hay suficiente stock del producto',
          showConfirmButton: false,
          timer: 1500
        })
      }
      },
      error=>{
        console.log(error.err);
        if(error.err){
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'No hay sufiente producto o faltan datos',
      
        })
      }
      }
    )
  }
  aumentoProducto(){
    this._productosService.AumentoProducto(this.productoModel).subscribe(
      response=>{
        this.empleados = response.productoEditado;
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Venta realizada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.mostrarProductos();
        this.verProductos();
      
      },
      error=>{
        console.log(error.err);
        if(error.err){
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'No hay sufiente producto o faltan datos',
      
        })
      }
      }
    )
  }
  obtenerGeneralProducto(){

    this._productosService.obtenerGeneralProducto(this.nombreBuscar, this.token).subscribe(
      response=>{
        console.log(response);
        this.empleadoSeleccionado=response.productoEncontrado;
        localStorage.setItem("empleadoSeleccionado",JSON.stringify(this.empleadoSeleccionado));
        this._router.navigate(['/productoencontrado']);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se ha encontrado la enfermedad'
        })

      }
    )
  }

  obtenerProductosCantidadMayor(){
    this._productosService.obtenerProductosCantidadMayor().subscribe(
      response=>{
        this.listaProducto = response.productoEncontrado;
        console.log(response.productoEncontrado)
      },
      error=>{
    }
    )
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
}
