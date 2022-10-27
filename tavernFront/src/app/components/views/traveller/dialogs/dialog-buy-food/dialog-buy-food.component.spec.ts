import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuyFoodComponent } from './dialog-buy-food.component';

describe('DialogBuyFoodComponent', () => {
  let component: DialogBuyFoodComponent;
  let fixture: ComponentFixture<DialogBuyFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuyFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBuyFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
