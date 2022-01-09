import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickseatsComponent } from './pickseats.component';

describe('PickseatsComponent', () => {
  let component: PickseatsComponent;
  let fixture: ComponentFixture<PickseatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickseatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
