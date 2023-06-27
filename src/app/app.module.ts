import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Practica1resistenciasModule } from './practica1-Resistencia/practica1resistencias/practica1resistencias.module';
import { CinepolisComponent } from './practica2-Cinepolis/cinepolis/cinepolis.component';
import { DistanciaModuleModule } from './practica-Distancia/distancia-module/distancia-module.module';
import { CinepolisMModule } from './practica2-Cinepolis/cinepolis-m/cinepolis-m.module';

@NgModule({
  declarations: [
    AppComponent
        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Practica1resistenciasModule,
    DistanciaModuleModule,
    CinepolisMModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
