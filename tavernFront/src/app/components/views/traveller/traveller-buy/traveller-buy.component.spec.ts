import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerBuyComponent } from './traveller-buy.component';

describe('TravellerBuyComponent', () => {
  let component: TravellerBuyComponent;
  let fixture: ComponentFixture<TravellerBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
