import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSelectorComponent } from './shop-selector.component';

describe('ShopSelectorComponent', () => {
  let component: ShopSelectorComponent;
  let fixture: ComponentFixture<ShopSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
