import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuarInmuebleComponent } from './valuar-inmueble.component';

describe('ValuarInmuebleComponent', () => {
  let component: ValuarInmuebleComponent;
  let fixture: ComponentFixture<ValuarInmuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuarInmuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
