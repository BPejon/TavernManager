import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerReadComponent } from './traveller-read.component';

describe('TravellerReadComponent', () => {
  let component: TravellerReadComponent;
  let fixture: ComponentFixture<TravellerReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
