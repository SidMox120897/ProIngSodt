import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDocenteComponent } from './mostrar-docente.component';

describe('MostrarDocenteComponent', () => {
  let component: MostrarDocenteComponent;
  let fixture: ComponentFixture<MostrarDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
