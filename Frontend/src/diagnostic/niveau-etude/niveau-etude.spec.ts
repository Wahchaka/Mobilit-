import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauEtude } from './niveau-etude';

describe('NiveauEtude', () => {
  let component: NiveauEtude;
  let fixture: ComponentFixture<NiveauEtude>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiveauEtude],
    }).compileComponents();

    fixture = TestBed.createComponent(NiveauEtude);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
