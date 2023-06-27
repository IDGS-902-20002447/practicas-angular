import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Practica1ResistenciasComponent } from '../practica1-resistencias/practica1-resistencias.component';


@NgModule({
  declarations: [
    Practica1ResistenciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   
  ],exports:[
    Practica1ResistenciasComponent
  ]
})
export class Practica1resistenciasModule { }
