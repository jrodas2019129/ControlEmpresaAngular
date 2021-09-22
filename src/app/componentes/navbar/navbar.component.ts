import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/servicios/global.service';

import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [EmpresaService]
})
export class NavbarComponent implements OnInit {
  public identidad;
  public url: any;
  constructor(
    public _empresaService: EmpresaService

  ) {
    this.identidad = this._empresaService.getIdentidad();
    this.url = GLOBAL.url;

   }


  ngOnInit(): void {
    this.identidad = this._empresaService.getIdentidad();

    console.log(this.identidad.username)

  }
  cerrarSesion(){
    localStorage.clear();
  }


}
