import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticContainer } from './diagnostic-container';

describe('DiagnosticContainer', () => {
  let component: DiagnosticContainer;
  let fixture: ComponentFixture<DiagnosticContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(DiagnosticContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
