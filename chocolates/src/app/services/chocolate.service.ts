import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Chocolate } from "../models/chocolate";
import { Global } from "./global";
import { Observable } from "rxjs";
import { ContactoComponent } from '../components/contacto/contacto.component';

@Injectable()
export class ChocolateService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //Ver todos los chocolates
    //http://localhost:3700/chocolates
    getChocolates():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'chocolates',{headers:headers});
    }
    //Guardar chocolate
    //http://localhost:3700/guardar-chocolate
    guardarChocolate(chocolate:Chocolate):Observable<any>{
        let params=JSON.stringify(chocolate);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-chocolate',params,{headers:headers});
    }
    //Ver Chocolate
    //http://localhost:3700/chocolate/63faae506e496be9d8078a23
    getChocolate(id:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'chocolate/'+id,{headers:headers});
    }
    //Editar Chocolate
    //http://localhost:3700/editar-chocolate/63faae506e496be9d8078a23
    updateChocolate(chocolate:Chocolate):Observable<any>{
        let params=JSON.stringify(chocolate);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'editar-chocolate/'+chocolate._id,params,{headers:headers});
    }
    //Eliminar chocolate
    //http://localhost:3700/borrar-chocolate/63faad4ab27ec98e607137a6
    deleteChocolate(id:string):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'borrar-chocolate/'+id,{headers:headers});
    }
}