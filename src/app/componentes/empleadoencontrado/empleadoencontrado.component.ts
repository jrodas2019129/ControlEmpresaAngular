import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-empleadoencontrado',
  templateUrl: './empleadoencontrado.component.html',
  styleUrls: ['./empleadoencontrado.component.scss'],
  providers: [UsuarioService]
})
export class EmpleadoencontradoComponent implements OnInit {
  public empleado: any;

  constructor(_usuarioService: UsuarioService) {
    this.empleado=_usuarioService.getEmpleados();
  }

  ngOnInit(): void {
  }

}
