import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica1ResistenciasComponent } from './practica1-resistencias.component';

describe('Practica1ResistenciasComponent', () => {
  let component: Practica1ResistenciasComponent;
  let fixture: ComponentFixture<Practica1ResistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practica1ResistenciasComponent]
    });
    fixture = TestBed.createComponent(Practica1ResistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
