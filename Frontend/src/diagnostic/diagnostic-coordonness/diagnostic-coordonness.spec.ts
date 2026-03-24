import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCoordonness } from './diagnostic-coordonness';

describe('DiagnosticCoordonness', () => {
  let component: DiagnosticCoordonness;
  let fixture: ComponentFixture<DiagnosticCoordonness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticCoordonness],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagnosticCoordonness);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
