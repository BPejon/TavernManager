import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerUpdateComponent } from './traveller-update.component';

describe('TravellerUpdateComponent', () => {
  let component: TravellerUpdateComponent;
  let fixture: ComponentFixture<TravellerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
