import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBeverageComponent } from './inventory-beverage.component';

describe('InventoryBeverageComponent', () => {
  let component: InventoryBeverageComponent;
  let fixture: ComponentFixture<InventoryBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
