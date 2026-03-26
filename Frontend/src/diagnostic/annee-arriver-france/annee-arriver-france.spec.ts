import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeArriverFrance } from './annee-arriver-france';

describe('AnneeArriverFrance', () => {
  let component: AnneeArriverFrance;
  let fixture: ComponentFixture<AnneeArriverFrance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnneeArriverFrance],
    }).compileComponents();

    fixture = TestBed.createComponent(AnneeArriverFrance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
