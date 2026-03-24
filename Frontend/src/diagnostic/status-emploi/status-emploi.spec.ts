import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEmploi } from './status-emploi';

describe('StatusEmploi', () => {
  let component: StatusEmploi;
  let fixture: ComponentFixture<StatusEmploi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusEmploi],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusEmploi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
