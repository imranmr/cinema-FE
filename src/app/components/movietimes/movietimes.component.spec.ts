import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietimesComponent } from './movietimes.component';

describe('MovietimesComponent', () => {
  let component: MovietimesComponent;
  let fixture: ComponentFixture<MovietimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovietimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
