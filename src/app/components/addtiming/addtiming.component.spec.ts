import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimingComponent } from './addtiming.component';

describe('AddtimingComponent', () => {
  let component: AddtimingComponent;
  let fixture: ComponentFixture<AddtimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtimingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
