import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPermisDeConduire } from './projet-permis-de-conduire';

describe('ProjetPermisDeConduire', () => {
  let component: ProjetPermisDeConduire;
  let fixture: ComponentFixture<ProjetPermisDeConduire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetPermisDeConduire],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetPermisDeConduire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
