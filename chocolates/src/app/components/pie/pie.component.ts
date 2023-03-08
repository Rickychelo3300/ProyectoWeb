import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  scrollToTopBtnr(){
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    })
  }
}
