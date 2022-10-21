import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'lorena';
  nombreUpper: string = 'LORENA';
  nombreCompleto: string = 'loREnA casTrO';

  fecha: Date = new Date();

}
