import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGrupoComponent } from './mostrar-grupo.component';

describe('MostrarGrupoComponent', () => {
  let component: MostrarGrupoComponent;
  let fixture: ComponentFixture<MostrarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
