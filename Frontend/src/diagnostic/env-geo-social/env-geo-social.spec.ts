import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGeoSocial } from './env-geo-social';

describe('EnvGeoSocial', () => {
  let component: EnvGeoSocial;
  let fixture: ComponentFixture<EnvGeoSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvGeoSocial],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvGeoSocial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
