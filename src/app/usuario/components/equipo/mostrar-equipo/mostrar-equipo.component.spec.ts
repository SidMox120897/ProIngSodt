import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEquipoComponent } from './mostrar-equipo.component';

describe('MostrarEquipoComponent', () => {
  let component: MostrarEquipoComponent;
  let fixture: ComponentFixture<MostrarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
