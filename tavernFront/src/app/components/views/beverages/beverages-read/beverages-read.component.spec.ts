import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesReadComponent } from './beverages-read.component';

describe('BeveragesReadComponent', () => {
  let component: BeveragesReadComponent;
  let fixture: ComponentFixture<BeveragesReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragesReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
