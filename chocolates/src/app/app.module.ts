import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolatesComponent } from './components/chocolates/chocolates.component';
import { CreatechocolateComponent } from './components/createchocolate/createchocolate.component';
import { DetallechocolateComponent } from './components/detallechocolate/detallechocolate.component';
import { EditarchocolateComponent } from './components/editarchocolate/editarchocolate.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    ChocolatesComponent,
    CreatechocolateComponent,
    DetallechocolateComponent,
    EditarchocolateComponent,
    ContactoComponent,
    HomeComponent,
    EncabezadoComponent,
    PieComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
