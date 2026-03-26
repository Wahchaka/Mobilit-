import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDeDemenagement } from './projet-de-demenagement';

describe('ProjetDeDemenagement', () => {
  let component: ProjetDeDemenagement;
  let fixture: ComponentFixture<ProjetDeDemenagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetDeDemenagement],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetDeDemenagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
