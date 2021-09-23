import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/modelos/empresa.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [EmpresaService]
})
export class RegistrarComponent implements OnInit {

  public modeloEmpresa: Empresa;
  public token: String;

  constructor(
    private _empresaService: EmpresaService,
    private _router: Router) {
      this.token = this._empresaService.getToken();

      this.modeloEmpresa = new Empresa("","","","","");
    }
  ngOnInit(): void {
  }

  registrar(){
    this._empresaService.registroEmpresa(this.modeloEmpresa,this.token ).subscribe(
      response=> {
        console.log(response)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Empresa creada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Empresa existente o faltan datos',
      
        })
      }
    )
    }}
