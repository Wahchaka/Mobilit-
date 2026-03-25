import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementSocial } from './accompagnement-social';

describe('AccompagnementSocial', () => {
  let component: AccompagnementSocial;
  let fixture: ComponentFixture<AccompagnementSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccompagnementSocial],
    }).compileComponents();

    fixture = TestBed.createComponent(AccompagnementSocial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
