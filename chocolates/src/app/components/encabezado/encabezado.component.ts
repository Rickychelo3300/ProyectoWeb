import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChocolateService } from '../../services/chocolate.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  scrollToTopBtnr() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
