import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOptionsSelectComponent } from './shop-options-select.component';

describe('ShopOptionsSelectComponent', () => {
  let component: ShopOptionsSelectComponent;
  let fixture: ComponentFixture<ShopOptionsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopOptionsSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopOptionsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
