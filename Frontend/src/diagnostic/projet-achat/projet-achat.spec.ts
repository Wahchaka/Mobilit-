import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetAchat } from './projet-achat';

describe('ProjetAchat', () => {
  let component: ProjetAchat;
  let fixture: ComponentFixture<ProjetAchat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetAchat],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetAchat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
