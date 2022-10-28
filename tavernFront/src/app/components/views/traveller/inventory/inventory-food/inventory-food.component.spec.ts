import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFoodComponent } from './inventory-food.component';

describe('InventoryFoodComponent', () => {
  let component: InventoryFoodComponent;
  let fixture: ComponentFixture<InventoryFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
