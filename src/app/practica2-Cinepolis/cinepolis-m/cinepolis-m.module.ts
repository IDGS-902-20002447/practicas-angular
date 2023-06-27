import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button';
import{MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CinepolisComponent } from '../cinepolis/cinepolis.component';


@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports:[
    CinepolisComponent
  ]
})
export class CinepolisMModule { }
