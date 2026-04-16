import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalitesDuProjetMobilite } from './finalites-du-projet-mobilite';

describe('FinalitesDuProjetMobilite', () => {
  let component: FinalitesDuProjetMobilite;
  let fixture: ComponentFixture<FinalitesDuProjetMobilite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalitesDuProjetMobilite],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalitesDuProjetMobilite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
