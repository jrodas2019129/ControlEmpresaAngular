import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { ProductosService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [ProductosService, EmpresaService]
})
export class GraficasComponent implements OnInit {
  public listaProducto: any;
  public identidad;

  chartOptions = {
    responsive: true,
  };
  chartLabels = [];
  chartData = [];
  chartColors = [
    {
      backgroundColor: []
    },
  ];

  chartLegend = true;
  chartPlugins = [];
 
  constructor(public _productosService: ProductosService, public _empresaService: EmpresaService) {
    this.identidad = this._empresaService.getIdentidad();
   }

  ngOnInit(): void {
    this.verProductos()
    this.obtenerCuenta();
  }
  verProductos(){
    this._productosService.verProductos().subscribe(
      response=>{
        this.listaProducto = response.productoEncontradas;
        console.log(response)
        this.listaProducto.forEach(datos =>{
          this.chartLabels.push(datos.nombre);
         this.chartData.push(datos.cantidadVendida);
         this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        })
      }
    )
  }
  obtenerCuenta(){
    this._empresaService.verCuenta().subscribe(
      response => {
        this.identidad = response.empresaEncontrado;
        console.log(response.empresaEncontrado)
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
