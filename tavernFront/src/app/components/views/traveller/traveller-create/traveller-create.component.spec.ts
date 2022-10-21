import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerCreateComponent } from './traveller-create.component';

describe('TravellerCreateComponent', () => {
  let component: TravellerCreateComponent;
  let fixture: ComponentFixture<TravellerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
