import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separateur } from './separateur';

describe('Separateur', () => {
  let component: Separateur;
  let fixture: ComponentFixture<Separateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Separateur],
    }).compileComponents();

    fixture = TestBed.createComponent(Separateur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
