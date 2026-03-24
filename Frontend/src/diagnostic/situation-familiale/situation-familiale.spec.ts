import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationFamiliale } from './situation-familiale';

describe('SituationFamiliale', () => {
  let component: SituationFamiliale;
  let fixture: ComponentFixture<SituationFamiliale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituationFamiliale],
    }).compileComponents();

    fixture = TestBed.createComponent(SituationFamiliale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
