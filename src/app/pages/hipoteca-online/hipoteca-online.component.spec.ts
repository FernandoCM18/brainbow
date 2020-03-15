import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecaOnlineComponent } from './hipoteca-online.component';

describe('HipotecaOnlineComponent', () => {
  let component: HipotecaOnlineComponent;
  let fixture: ComponentFixture<HipotecaOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipotecaOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipotecaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
