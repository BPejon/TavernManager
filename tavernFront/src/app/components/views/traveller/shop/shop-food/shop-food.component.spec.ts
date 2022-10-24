import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFoodComponent } from './shop-food.component';

describe('ShopFoodComponent', () => {
  let component: ShopFoodComponent;
  let fixture: ComponentFixture<ShopFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
