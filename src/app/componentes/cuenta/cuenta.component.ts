import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { GLOBAL } from 'src/app/servicios/global.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
  providers: [EmpresaService, ImagenService]
})
export class CuentaComponent implements OnInit {
  public url: any;
  public token: any;
  public identidad;
  public usuarios: any;

  constructor(public _empresaService: EmpresaService, public _imagenService: ImagenService,
    private _router: Router) {
      this.identidad = this._empresaService.getIdentidad();

      this.token = _empresaService.getToken();
    this.url = GLOBAL.url;
     }

  ngOnInit(
    
  ): void {
    this.obtenerCuenta();
  }
  subirImagen(){
    this._imagenService.subirImagen(this.url + 'subirImagen', [], this.imagenASubir, this.token,
    'imagen').then((resultado: any) => {
      console.log(resultado);
      this.identidad.imagen = resultado.empresaEncontrado.imagen;
      localStorage.setItem('identidad', JSON.stringify(this.identidad))
  })
}
public imagenASubir: Array<File> = [];
  inputEvento(fileInput: any){
    this.imagenASubir = <Array<File>>fileInput.target.files;
  }

  obtenerCuenta(){
    this._empresaService.verCuenta().subscribe(
      response => {
        this.usuarios = response.empresaEncontrado;
        console.log(response.empresaEncontrado)
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}

