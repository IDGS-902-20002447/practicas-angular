import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})

export class CinepolisComponent {
  tarjetas: string[] = ['Si', 'No'];
  resultadoTotal!: number;
  nombre: string = '';
  numPersonas!: number ;
  numBoletos!:number;
  tarjeta: string = '';
  mensaje!:string;

  calcularCompra() {
   
    const precio: number = 12;
    const limit: number = 7;
  
    let total: number = 0;
    let descuento: number;
  
    const totalPermitidos: number = limit * this.numPersonas;
  
    if (this.numBoletos <= totalPermitidos) {
      if (this.numBoletos > 5) {
        
        descuento = this.numBoletos * precio * 0.15;
        this.mensaje = "Su compra ha sido exitosa";
        total = this.numBoletos * precio - descuento;

      } else if (this.numBoletos === 3 || this.numBoletos === 4 || this.numBoletos === 5) {

        descuento = this.numBoletos * precio * 0.1;
        this.mensaje = "Su compra ha sido exitosa";
        total = this.numBoletos * precio - descuento;

      } else {

        total = this.numBoletos * precio;
        this.mensaje = "Su compra ha sido exitosa";

      }
    } else {
      
      this.mensaje = "Lo sentimos, excede el número de boletos permitidos ";
    }
  
     this.resultadoTotal = this.tarjetaMedo(this.tarjeta, total);
  
  }
  
  tarjetaMedo(tarjeta: string, total: number): number {
    let totalFinal: number = 0;
    let desc: number;
  
    if (tarjeta === "Si") {
      desc = total * 0.1;
      totalFinal = total - desc;
    } else {
      totalFinal = total;
    }
  
    return totalFinal;
  }
  
}
