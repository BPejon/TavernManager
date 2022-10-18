import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesUpdateComponent } from './beverages-update.component';

describe('BeveragesUpdateComponent', () => {
  let component: BeveragesUpdateComponent;
  let fixture: ComponentFixture<BeveragesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
