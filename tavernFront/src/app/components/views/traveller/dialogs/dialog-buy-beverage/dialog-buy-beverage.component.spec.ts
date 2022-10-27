import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuyBeverageComponent } from './dialog-buy-beverage.component';

describe('DialogBuyBeverageComponent', () => {
  let component: DialogBuyBeverageComponent;
  let fixture: ComponentFixture<DialogBuyBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuyBeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBuyBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
