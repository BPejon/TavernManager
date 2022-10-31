import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSellBeverageComponent } from './shop-sell-beverage.component';

describe('ShopSellBeverageComponent', () => {
  let component: ShopSellBeverageComponent;
  let fixture: ComponentFixture<ShopSellBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSellBeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSellBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
