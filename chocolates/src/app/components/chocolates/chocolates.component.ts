import { Component, OnInit } from '@angular/core';
import { Chocolate } from 'src/app/models/chocolate';
import { ChocolateService } from '../../services/chocolate.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css'],
  providers: [ChocolateService]
})

export class ChocolatesComponent implements OnInit{
  public chocolates:Chocolate[];
  public url:string;
  
  constructor(
    private _chocolateService:ChocolateService
  ){
    this.url=Global.url;
    this.chocolates=[];
  }
  ngOnInit(): void {
    this.getChocolates();
  }

  getChocolates(){
    this._chocolateService.getChocolates().subscribe(
      response=>{
        console.log(response.chocolatesG);
        if(response.chocolatesG){
          this.chocolates=response.chocolatesG;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
