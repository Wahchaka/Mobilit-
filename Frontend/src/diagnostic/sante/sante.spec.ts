import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sante } from './sante';

describe('Sante', () => {
  let component: Sante;
  let fixture: ComponentFixture<Sante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sante],
    }).compileComponents();

    fixture = TestBed.createComponent(Sante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
