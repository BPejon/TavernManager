import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSellBeverageComponent } from './dialog-sell-beverage.component';

describe('DialogSellBeverageComponent', () => {
  let component: DialogSellBeverageComponent;
  let fixture: ComponentFixture<DialogSellBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSellBeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSellBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
