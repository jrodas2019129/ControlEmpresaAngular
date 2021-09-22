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
          title: 'Empresa creada correctamente',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        this._router.navigate(["/login"]);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          title: 'Esta empresa ya existe',
          width: 600,
          padding: '3em',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
      }
    )
    }}
