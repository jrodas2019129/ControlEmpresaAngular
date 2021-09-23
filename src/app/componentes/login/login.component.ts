import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/modelos/empresa.model';
import { Usuario } from 'src/app/modelos/usuario.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import Swal from "sweetalert2"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [EmpresaService]
})
export class LoginComponent implements OnInit {
  public empresaModel: Empresa;
  public token: any;
  public identidad: any;
  constructor(
    private _empresaService: EmpresaService,
    private _router: Router
  ) {
    this.empresaModel = new Empresa("","","","","");
  }

  ngOnInit(): void {
  }

  obtenerToken(){
    this._empresaService.login(this.empresaModel, "true").subscribe(
      response => {
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },error => {

        console.log(<any>error)
      }
    )
  }
  login() {
    this._empresaService.login(this.empresaModel, "").subscribe(
      response =>{
        this.identidad = response.EmpresaEncontrada;
        localStorage.setItem("identidad", JSON.stringify(this.identidad))
        this.obtenerToken();
        console.log(this.identidad.rol);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Haz ingresado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        if(this.identidad.rol==="ROL_EMPRESA"){

          this._router.navigate(["/inicio"]);
          console.log(this.identidad.rol)

        }else if(this.identidad.rol==="ROL_ADMIN"){

          this._router.navigate(["/registrar"]);
          console.log(this.identidad.rol)
        }


      },error => {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Ups, no haz podido acceder',
      
        })
        console.log(<any>error)
      }
    )
  }
      }

