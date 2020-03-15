import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteBrainbowComponent } from './reporte-brainbow.component';

describe('ReporteBrainbowComponent', () => {
  let component: ReporteBrainbowComponent;
  let fixture: ComponentFixture<ReporteBrainbowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteBrainbowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteBrainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
