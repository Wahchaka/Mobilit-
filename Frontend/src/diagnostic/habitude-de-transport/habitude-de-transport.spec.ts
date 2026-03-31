import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitudeDeTransport } from './habitude-de-transport';

describe('HabitudeDeTransport', () => {
  let component: HabitudeDeTransport;
  let fixture: ComponentFixture<HabitudeDeTransport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitudeDeTransport],
    }).compileComponents();

    fixture = TestBed.createComponent(HabitudeDeTransport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
