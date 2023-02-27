import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ChocolateService } from '../../services/chocolate.service';
import { Chocolate } from '../../models/chocolate';
import { Global } from '../../services/global';

@Component({
  selector: 'app-detallechocolate',
  templateUrl: './detallechocolate.component.html',
  styleUrls: ['./detallechocolate.component.css'],
  providers: [ChocolateService]
})
export class DetallechocolateComponent implements OnInit {
  public url:string;
  public chocolate:Chocolate;
  public confirm:boolean;

  constructor(
    private _chocolateService:ChocolateService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url=Global.url;
    this.chocolate = new Chocolate('','',2.5,'','',''); //id, nombre, precio, tipo, descripcion, imagen
    this.confirm=false; 
  }
  
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
       this.getChocolate(id);
    });
  }

  getChocolate(id:String){
    console.log(id);
    console.log(id.toString());
    this._chocolateService.getChocolate(id.toString()).subscribe(
      response=>{
        this.chocolate=response.chocolate;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  setConfirm(confirm: boolean){
    this.confirm=confirm;
  }
  borrarChocolate(id:String){
    this._chocolateService.deleteChocolate(id.toString()).subscribe(
      response=>{
        if(response.chocolate){
          this._router.navigate(['/chocolates']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
