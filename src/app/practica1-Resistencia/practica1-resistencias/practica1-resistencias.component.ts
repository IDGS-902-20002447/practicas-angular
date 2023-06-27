import { Component } from '@angular/core';

@Component({
  selector: 'app-practica1-resistencias',
  templateUrl: './practica1-resistencias.component.html',
  styleUrls: ['./practica1-resistencias.component.css']
})
export class Practica1ResistenciasComponent {

  colores: string[] = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White'];
//  tolerancias: string[] = ['Gold', 'Silver'];

  banda1!: string;
  banda2!: string;
  banda3!: string;
  tolerancia!: string;

  resistencia!: number;
  min!: number;
  max!: number;
  toleranciaValor!: number;

  calcular(): void {

    const valor1 = colorValor(this.banda1);
    const valor2 = colorValor(this.banda2);
    const valor3 = colorValor(this.banda3);

    const resistenciaValor = (valor1 * 10 + valor2) * Math.pow(10, valor3);


    if (this.tolerancia === 'Dorado') {
      this.toleranciaValor= 0.05;
    } else if (this.tolerancia === 'Plateado') {
      this.toleranciaValor= 0.1;
    } else {
      this.toleranciaValor= 0;
    } 


    this.resistencia = resistenciaValor;
    this.max = resistenciaValor + resistenciaValor * this.toleranciaValor;
    this.min = resistenciaValor - resistenciaValor * this.toleranciaValor;
  }
  
}

const colorValor = (color: string): number => {
  switch (color) {
    case 'Black':
      return 0;
    case 'Brown':
      return 1;
    case 'Red':
      return 2;
    case 'Orange':
      return 3;
    case 'Yellow':
      return 4;
    case 'Green':
      return 5;
    case 'Blue':
      return 6;
    case 'Purple':
      return 7;
    case 'Gray':
      return 8;
    case 'White':
      return 9;
    default:
      return 0;
  }
};
