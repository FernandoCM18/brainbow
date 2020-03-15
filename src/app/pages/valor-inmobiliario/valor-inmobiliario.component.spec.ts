import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorInmobiliarioComponent } from './valor-inmobiliario.component';

describe('ValorInmobiliarioComponent', () => {
  let component: ValorInmobiliarioComponent;
  let fixture: ComponentFixture<ValorInmobiliarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorInmobiliarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorInmobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
