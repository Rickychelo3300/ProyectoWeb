import { Component, OnInit, ViewChild} from '@angular/core';
import { ChocolateService } from '../../services/chocolate.service';
import { Chocolate } from '../../models/chocolate';
import { Global } from '../../services/global';
import { CargarService } from '../../services/cargar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editarchocolate',
  templateUrl: '../createchocolate/createchocolate.component.html',
  styleUrls: ['../createchocolate/createchocolate.component.css'],
  providers: [ChocolateService, CargarService]
})

export class EditarchocolateComponent implements OnInit {
  public titulo:string;
  public chocolate:Chocolate;
  public chocolateGuardar:Chocolate;
  public url:string;
  public status:string;
  public idGuardado: string;
  public archivosParaCargar: Array<File>;
  
  constructor(
    private _chocolateService: ChocolateService,
    private _cargarService: CargarService,
    private _route: ActivatedRoute,
    private _router:Router
  ){
    this.titulo="MODIFICAR UN PRODUCTO";
    this.url=Global.url;
    this.chocolate=new Chocolate('','',3.50,'','',''); //id, nombre, precio, tipo, descripcion, imagen
    this.chocolateGuardar=new Chocolate('','',3.50,'','',''); //id, nombre, precio, tipo, descripcion, imagen
    this.status="";
    this.idGuardado="";
    this.archivosParaCargar=[];
  }
  
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
       this.getChocolate(id);
       console.log("ID: ",id);
    });
  }

  getChocolate(id:String){
    console.log(id);
    console.log(id.toString());
    this._chocolateService.getChocolate(id).subscribe(
      response=>{
        this.chocolate=response.chocolateG;
        console.log("Respuesta",response);
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  guardarChocolate(form: NgForm){
    this._chocolateService.updateChocolate(this.chocolate).subscribe(
      response=>{
        console.log(response);
          if(this.archivosParaCargar){
            console.log(this.chocolate._id);
            console.log(response.chocolateU._id);
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+this.chocolate._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.chocolateGuardar=response.chocolateU;
              this.status='success';
              this.idGuardado = response.chocolateU._id;
              form.reset();
            });
          }else{
            this.chocolateGuardar=response.chocolate;
            this.status='success';
            console.log("Else en el segundo IF");
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
