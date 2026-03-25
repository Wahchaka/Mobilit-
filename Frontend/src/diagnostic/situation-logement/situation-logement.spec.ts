import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationLogement } from './situation-logement';

describe('SituationLogement', () => {
  let component: SituationLogement;
  let fixture: ComponentFixture<SituationLogement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituationLogement],
    }).compileComponents();

    fixture = TestBed.createComponent(SituationLogement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
