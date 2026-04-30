import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockageDiagnoContainer } from './stockage-diagno-container';

describe('StockageDiagnoContainer', () => {
  let component: StockageDiagnoContainer;
  let fixture: ComponentFixture<StockageDiagnoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockageDiagnoContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(StockageDiagnoContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
