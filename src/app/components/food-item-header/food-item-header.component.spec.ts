import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemHeaderComponent } from './food-item-header.component';

describe('FoodItemHeaderComponent', () => {
  let component: FoodItemHeaderComponent;
  let fixture: ComponentFixture<FoodItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
