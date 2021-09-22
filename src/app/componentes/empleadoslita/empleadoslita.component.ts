import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-empleadoslita',
  templateUrl: './empleadoslita.component.html',
  styleUrls: ['./empleadoslita.component.scss'],
  providers: [UsuarioService, EmpresaService]
})
export class EmpleadoslitaComponent implements OnInit {
  public token: String;
  public idEmpleados =  ''
  public usuarioModel: Usuario;
  public listaUsuarios: any;
  public empleados: any;
  title = 'htmltopdf';

  @ViewChild('pdfTable') pdfTable: ElementRef;

  public downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();

  }

  constructor(public _usuariosService: UsuarioService, private _empresaService: EmpresaService,
    private _router: Router) {
    this.token = this._empresaService.getToken();
    this.usuarioModel = new Usuario("","","","","","");
   }


  ngOnInit(): void {
    this.mostrarHoteles();
    this.verEmpleados();

  }

  verEmpleados(){
    this._usuariosService.verEmpleados().subscribe(
      response=>{
        this.listaUsuarios = response.usuarioEncontradas;
        console.log(response.usuarioEncontradas)
      },
      error=>{
    }
    )
  }
  mostrarHoteles(){
    this._usuariosService.verEmpleados().subscribe(
      response=>{
        console.log(response)
        this.empleados=response.usuarioEncontradas;
      },
      error=>{
        console.log(<any>error)
      }
    )
}
  obtenerEmpleado(_id: any){
    this.idEmpleados=_id;
    this._usuariosService.obtenerEmpleado(this.idEmpleados, this.token).subscribe(
      response => {
        this.usuarioModel = response.usuario_registrado
        console.log(response.usuario_registrado);
    })

  }

  editarEmpleado(){
    this._usuariosService.editarEmpleado(this.usuarioModel, this.token).subscribe(
     response => {
     console.log(response);
     this.verEmpleados();

    })
  }
  eliminarEmpleado(){
   this._usuariosService.eliminarEmpleado(this.usuarioModel, this.token).subscribe(
     response => {
       console.log(response)
       this.verEmpleados();
     }
   )

  }
}
