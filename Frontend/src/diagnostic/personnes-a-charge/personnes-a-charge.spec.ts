import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesACharge } from './personnes-a-charge';

describe('PersonnesACharge', () => {
  let component: PersonnesACharge;
  let fixture: ComponentFixture<PersonnesACharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnesACharge],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnesACharge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
