import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/modelos/empresa.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-new-empresa',
  templateUrl: './new-empresa.component.html',
  styleUrls: ['./new-empresa.component.scss'],
  providers: [EmpresaService]

})
export class NewEmpresaComponent implements OnInit {
  public modeloEmpresa: Empresa;
  public token: string;
  public empresaLista: any;
  public idEmpresas =  ''
  public empleados: any;

  constructor(
    private _empresaService: EmpresaService,

  ) { this.token = this._empresaService.getToken();
    this.modeloEmpresa = new Empresa("","","","","")
  }

  ngOnInit(): void {
    this.obtenerEmpresas()
    this.mostrarProductos();

  }
  obtenerEmpresas(){
    this._empresaService.obtenerEmpresas(this.token).subscribe(
      response => {
         console.log(response.empresasEncontradas);
         this.empresaLista = response.empresasEncontradas
      },
      error => {
        console.log(<any>error);
      })
  }
  obtenerEmpresa(_id: any){
    this.idEmpresas=_id;
    this._empresaService.obtenerEmpresa(this.idEmpresas, this.token).subscribe(
      response => {
        this.modeloEmpresa = response.empresaEncontrada
        console.log(response.empresaEncontrada);
    })

  }
  mostrarProductos(){
    this._empresaService.obtenerEmpresas(this.token).subscribe(
      response=>{
        console.log(response)
        this.empleados=response.productoEncontradas;
      },
      error=>{
        console.log(<any>error)
      }
    )
}
  editarEmpresa(){
    this._empresaService.editarEmpresa(this.modeloEmpresa, this.token).subscribe(
     response => {
     console.log(response);
     this.obtenerEmpresas();

    })
  }
  eliminarEmpresa(){
   this._empresaService.eliminarEmpresa(this.modeloEmpresa, this.token).subscribe(
     response => {
       console.log(response)
       this.obtenerEmpresas();
     }
   )

  }
}
