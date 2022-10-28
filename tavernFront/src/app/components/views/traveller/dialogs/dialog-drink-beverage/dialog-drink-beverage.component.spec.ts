import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDrinkBeverageComponent } from './dialog-drink-beverage.component';

describe('DialogDrinkBeverageComponent', () => {
  let component: DialogDrinkBeverageComponent;
  let fixture: ComponentFixture<DialogDrinkBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDrinkBeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDrinkBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
