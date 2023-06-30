import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Practica1resistenciasModule } from './practica1-Resistencia/practica1resistencias/practica1resistencias.module';
import { DistanciaModuleModule } from './practica-Distancia/distancia-module/distancia-module.module';
import { CinepolisMModule } from './practica2-Cinepolis/cinepolis-m/cinepolis-m.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
