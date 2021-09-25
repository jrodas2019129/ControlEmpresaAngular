import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productoencontrado',
  templateUrl: './productoencontrado.component.html',
  styleUrls: ['./productoencontrado.component.scss'],
  providers: [ProductosService]
})
export class ProductoencontradoComponent implements OnInit {

  public empleado: any;

  constructor(_productoService: ProductosService) {
    this.empleado=_productoService.getProductos();
  }
  ngOnInit(): void {
  }

}
