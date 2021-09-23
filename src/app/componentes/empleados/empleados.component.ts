import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  providers: [UsuarioService, EmpresaService]
})
export class EmpleadosComponent implements OnInit {
  public token: String;
  public empleado: any;
  public modeloAgregarUsuario: Usuario;

  constructor(public _empresaService: EmpresaService, public _empleadoService: UsuarioService) {
    this.token = this._empresaService.getToken();
      this.modeloAgregarUsuario = new Usuario("","","","","","")
    }

  ngOnInit(): void {
  }

  registroEmpleado(){
    this._empleadoService.registroEmpleado(this.modeloAgregarUsuario,this.token).subscribe(
      response=>{
        this.empleado = response.adminoEncontrado;
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empleado creado correctamente',
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
          text: 'Empleado existente o faltan datos',
      
        })
      }
    )
  }


}
