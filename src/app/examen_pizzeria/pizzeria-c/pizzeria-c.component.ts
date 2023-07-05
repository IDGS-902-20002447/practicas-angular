import { Component } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizzeria-c',
  templateUrl: './pizzeria-c.component.html',
  styleUrls: ['./pizzeria-c.component.css']
})

export class PizzeriaCComponent {
  nombreCliente!: string;
  direccionCliente!: string;
  telefonoCliente!: string;
  fechaCompra!: string;
  tamanioPizza!: string;
  ingredientesPizza: string[] = [];
  numeroPizzas!: number;
  detallePedido: Pizza[] = [];
  pedidosRegistrados: Pizza[] = [];
  costoTotal:number=0;
  pedidoConfirmado = false;

  costoIngredientes: number = 10;
  jamonChecked: boolean = false;
  pinaChecked: boolean = false;
  champinonesChecked: boolean = false;

  agregarPizza() {
    const ingredientes: string[] = [];
    if (this.jamonChecked) {
      ingredientes.push('Jamón');
    }
    if (this.pinaChecked) {
      ingredientes.push('Piña');
    }
    if (this.champinonesChecked) {
      ingredientes.push('Champiñones');
    }
  
    const subtotal = this.calcularSubtotal(ingredientes);
  
    const pizza = {
      tamanio: this.tamanioPizza,
      ingredientes: ingredientes,
      numeroPizzas: this.numeroPizzas,
      subtotal: subtotal
    };
  
    this.detallePedido.push(pizza);
  
    // Restablecer los valores de los campos de la pizza actual
    this.tamanioPizza = '';
    this.jamonChecked = false;
    this.pinaChecked = false;
    this.champinonesChecked = false;
    this.numeroPizzas = 0;
  }
  
  calcularSubtotal(ingredientes: string[]): number {
    let costoTamanio = 0;
    let costoIngredientes = this.costoIngredientes * ingredientes.length;
    
    if (this.tamanioPizza === 'chica') {
      costoTamanio = 40;
    } else if (this.tamanioPizza === 'mediana') {
      costoTamanio = 80;
    } else if (this.tamanioPizza === 'grande') {
      costoTamanio = 120;
    }
    
    return (costoTamanio + costoIngredientes) * this.numeroPizzas;
  }
  
  
  quitarPizza(pizza: Pizza) {
    const index = this.detallePedido.indexOf(pizza);
    if (index > -1) {
      this.detallePedido.splice(index, 1);
    }
  }


  
  confirmarPedido() {
    for (const pizza of this.detallePedido) {
     this.costoTotal += pizza.subtotal;
    }
  
    const confirmacion = confirm(`El costo total del pedido es: ${this.costoTotal}. ¿Está de acuerdo?`);
    if (!confirmacion) {
    } else {
      this.pedidosRegistrados = this.detallePedido;
      this.detallePedido = [];
      this.pedidoConfirmado = true;
    }
  }

  getIngredientesSeleccionados(ingredientes: string[]): string {
    return ingredientes.join(', ');
  }
  
}
