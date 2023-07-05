import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanciaComponent } from './practica-Distancia/distancia/distancia.component';
import { CinepolisComponent } from './practica2-Cinepolis/cinepolis/cinepolis.component';
import { Practica1ResistenciasComponent } from './practica1-Resistencia/practica1-resistencias/practica1-resistencias.component';
import { PizzeriaCComponent } from './examen_pizzeria/pizzeria-c/pizzeria-c.component';

const routes: Routes = [
  //{path:'Distancia',component:DistanciaComponent},
  {path:'Distancia',component:DistanciaComponent},
  {path:'Resistencia',component:Practica1ResistenciasComponent},
  {path:'Cinepolis',component:CinepolisComponent},
  {path:'Pizzeria',component:PizzeriaCComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
