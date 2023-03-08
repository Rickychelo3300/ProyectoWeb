import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ChocolatesComponent } from './components/chocolates/chocolates.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CreatechocolateComponent } from './components/createchocolate/createchocolate.component';
import { DetallechocolateComponent } from './components/detallechocolate/detallechocolate.component';
import { EditarchocolateComponent } from './components/editarchocolate/editarchocolate.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'chocolates', component: ChocolatesComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'guardar-chocolate', component: CreatechocolateComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'chocolate/:id', component: DetallechocolateComponent},
  {path: 'editar-chocolate/:id', component: EditarchocolateComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
