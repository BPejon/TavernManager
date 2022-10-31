import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSellFoodComponent } from './shop-sell-food.component';

describe('ShopSellFoodComponent', () => {
  let component: ShopSellFoodComponent;
  let fixture: ComponentFixture<ShopSellFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSellFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSellFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
