import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixLocalisationDomicile } from './choix-localisation-domicile';

describe('ChoixLocalisationDomicile', () => {
  let component: ChoixLocalisationDomicile;
  let fixture: ComponentFixture<ChoixLocalisationDomicile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixLocalisationDomicile],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixLocalisationDomicile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
