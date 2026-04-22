import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDebut } from './info-debut';

describe('InfoDebut', () => {
  let component: InfoDebut;
  let fixture: ComponentFixture<InfoDebut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDebut],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDebut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
