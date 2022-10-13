import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodReadComponent } from './food-read.component';

describe('FoodReadComponent', () => {
  let component: FoodReadComponent;
  let fixture: ComponentFixture<FoodReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
