import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBeverageComponent } from './shop-beverage.component';

describe('ShopBeverageComponent', () => {
  let component: ShopBeverageComponent;
  let fixture: ComponentFixture<ShopBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
