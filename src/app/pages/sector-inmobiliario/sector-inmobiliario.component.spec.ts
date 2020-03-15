import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorInmobiliarioComponent } from './sector-inmobiliario.component';

describe('SectorInmobiliarioComponent', () => {
  let component: SectorInmobiliarioComponent;
  let fixture: ComponentFixture<SectorInmobiliarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorInmobiliarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorInmobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
