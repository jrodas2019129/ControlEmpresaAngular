import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [ProductosService]
})
export class GraficasComponent implements OnInit {
  public listaProducto: any;

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
 
  constructor(public _productosService: ProductosService) { }

  ngOnInit(): void {
    this.verProductos()
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
 
}
