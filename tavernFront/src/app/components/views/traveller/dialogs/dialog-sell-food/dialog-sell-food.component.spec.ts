import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSellFoodComponent } from './dialog-sell-food.component';

describe('DialogSellFoodComponent', () => {
  let component: DialogSellFoodComponent;
  let fixture: ComponentFixture<DialogSellFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSellFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSellFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
