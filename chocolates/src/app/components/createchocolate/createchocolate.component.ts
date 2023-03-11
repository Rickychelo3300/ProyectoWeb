import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chocolate } from '../../models/chocolate';
import { CargarService } from '../../services/cargar.service';
import { ChocolateService } from '../../services/chocolate.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-createchocolate',
  templateUrl: './createchocolate.component.html',
  styleUrls: ['./createchocolate.component.css'],
  providers: [ChocolateService, CargarService]
})
export class CreatechocolateComponent implements OnInit {
  public titulo:string;
  public chocolate:Chocolate;
  public chocolateGuardar:Chocolate;
  public url:string;
  public status:string;
  public idGuardado: string;
  public archivosParaCargar: Array<File>;
  @ViewChild('archivoImagen') fileInput:any;
  constructor(
    private _chocolateService: ChocolateService,
    private _cargarService: CargarService
  ){
    this.titulo="REGISTRAR UN NUEVO PRODUCTO";
    this.url=Global.url;
    this.chocolate=new Chocolate('','',0,'','',''); //id, nombre, precio, tipo, descripcion, imagen
    this.chocolateGuardar=new Chocolate('','',0,'','',''); //id, nombre, precio, tipo, descripcion, imagen
    this.status="";
    this.idGuardado="";
    this.archivosParaCargar=[];
  }
  ngOnInit(): void {

  }
  guardarChocolate(form: NgForm){
    this._chocolateService.guardarChocolate(this.chocolate).subscribe(
      response=>{
        console.log(response);
        if(response.chocolate){
          console.log("Pasó el primer if");
          if(this.archivosParaCargar){
            console.log("Pasó el segundo if");
            console.log(response.chocolate._id);
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.chocolate._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.chocolateGuardar=response.chocolate;
              this.status='success';
              this.idGuardado = response.chocolate._id;
              console.log(this.idGuardado);
              console.log(response);
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            this.status='failed';
            console.log("Else en el segundo IF");
          }
        }else{
          this.status='failed';
          console.log("Else en el primer IF");
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }

}
