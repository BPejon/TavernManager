import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesCreateComponent } from './beverages-create.component';

describe('BeveragesCreateComponent', () => {
  let component: BeveragesCreateComponent;
  let fixture: ComponentFixture<BeveragesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
