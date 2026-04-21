import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirBouger } from './savoir-bouger';

describe('SavoirBouger', () => {
  let component: SavoirBouger;
  let fixture: ComponentFixture<SavoirBouger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavoirBouger],
    }).compileComponents();

    fixture = TestBed.createComponent(SavoirBouger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
