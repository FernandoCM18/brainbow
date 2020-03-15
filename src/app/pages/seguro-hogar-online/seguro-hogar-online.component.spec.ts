import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroHogarOnlineComponent } from './seguro-hogar-online.component';

describe('SeguroHogarOnlineComponent', () => {
  let component: SeguroHogarOnlineComponent;
  let fixture: ComponentFixture<SeguroHogarOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroHogarOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroHogarOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
