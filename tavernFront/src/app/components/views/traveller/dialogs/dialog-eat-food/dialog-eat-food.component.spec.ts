import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEatFoodComponent } from './dialog-eat-food.component';

describe('DialogEatFoodComponent', () => {
  let component: DialogEatFoodComponent;
  let fixture: ComponentFixture<DialogEatFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEatFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEatFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
