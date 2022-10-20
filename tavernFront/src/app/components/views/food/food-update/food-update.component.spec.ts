import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodUpdateComponent } from './food-update.component';

describe('FoodUpdateComponent', () => {
  let component: FoodUpdateComponent;
  let fixture: ComponentFixture<FoodUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
