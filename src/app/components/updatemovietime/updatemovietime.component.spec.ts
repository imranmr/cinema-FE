import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemovietimeComponent } from './updatemovietime.component';

describe('UpdatemovietimeComponent', () => {
  let component: UpdatemovietimeComponent;
  let fixture: ComponentFixture<UpdatemovietimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemovietimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemovietimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
