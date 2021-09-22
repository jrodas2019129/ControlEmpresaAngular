import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [UsuarioService, EmpresaService]
})
export class InicioComponent implements OnInit {
  public token: String;

  public nombreBuscar: any = {puesto: '', departamento: ''};
  public empleadoSeleccionado: any;
  constructor(public _usuarioService: UsuarioService, private _router: Router, private _empresaService: EmpresaService) {
    this.token = this._empresaService.getToken();

  }

  ngOnInit(): void {
  }
  obtenerEmpleadoNombre(){

    this._usuarioService.obtenerEmpleadoNombre(this.nombreBuscar, this.token).subscribe(
      response=>{
        console.log(response);
        this.empleadoSeleccionado=response.usuarioEncontrado;
        localStorage.setItem("empleadoSeleccionado",JSON.stringify(this.empleadoSeleccionado));
        console.log(response);

        this._router.navigate(['/empleadolista']);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se ha encontrado al empleado'
        })

      }
    )
  }
  buscarNombreEmpleado(){

    this._usuarioService.obtenerEmpleadoNombre2(this.nombreBuscar, this.token).subscribe(
      response=>{
        console.log(response);
        this.empleadoSeleccionado=response.usuarioEncontrado;
        localStorage.setItem("empleadoSeleccionado",JSON.stringify(this.empleadoSeleccionado));
        this._router.navigate(['/empleadoEncontrado']);
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
  obtenerGeneral(){

    this._usuarioService.obtenerGeneral(this.nombreBuscar, this.token).subscribe(
      response=>{
        console.log(response);
        this.empleadoSeleccionado=response.usuarioEncontrado;
        localStorage.setItem("empleadoSeleccionado",JSON.stringify(this.empleadoSeleccionado));
        this._router.navigate(['/empleadoEncontrado']);
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

}
