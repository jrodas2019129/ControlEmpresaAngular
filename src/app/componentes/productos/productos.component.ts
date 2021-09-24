import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { ProductosService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService,EmpresaService]

})
export class ProductosComponent implements OnInit {
  public token: String;
  public producto: any;
  public modeloAgregarProducto: Producto;

  constructor(public _empresaService: EmpresaService, public _productoService: ProductosService) {
    this.token = this._empresaService.getToken();
      this.modeloAgregarProducto = new Producto("","","",0,0,"")
    }
  ngOnInit(): void {
  }

  registrProducto(){
    this._productoService.registroProducto(this.modeloAgregarProducto,this.token).subscribe(
      response=>{
        this.producto = response.productoGuardado;
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto creado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        //this._router.navigate(["/login"]);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Producto existente o faltan datos',
      
        })
      }
    )
  }
}
