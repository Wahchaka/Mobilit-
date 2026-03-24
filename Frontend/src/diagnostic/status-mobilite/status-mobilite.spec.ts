import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMobilite } from './status-mobilite';

describe('StatusMobilite', () => {
  let component: StatusMobilite;
  let fixture: ComponentFixture<StatusMobilite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusMobilite],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusMobilite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
