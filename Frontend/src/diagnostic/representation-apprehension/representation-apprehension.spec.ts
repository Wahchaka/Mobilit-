import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationApprehension } from './representation-apprehension';

describe('RepresentationApprehension', () => {
  let component: RepresentationApprehension;
  let fixture: ComponentFixture<RepresentationApprehension>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepresentationApprehension],
    }).compileComponents();

    fixture = TestBed.createComponent(RepresentationApprehension);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
