import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzeriaCComponent } from '../pizzeria-c/pizzeria-c.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button';
import{MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [PizzeriaCComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
  MatSelectModule,
  ],
  exports:[PizzeriaCComponent]
})
export class PizzeriaMModule { }
