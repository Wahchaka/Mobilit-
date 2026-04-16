import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinsExprimeDansCeProjet } from './besoins-exprime-dans-ce-projet';

describe('BesoinsExprimeDansCeProjet', () => {
  let component: BesoinsExprimeDansCeProjet;
  let fixture: ComponentFixture<BesoinsExprimeDansCeProjet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BesoinsExprimeDansCeProjet],
    }).compileComponents();

    fixture = TestBed.createComponent(BesoinsExprimeDansCeProjet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
