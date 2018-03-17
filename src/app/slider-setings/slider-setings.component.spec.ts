import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSetingsComponent } from './slider-setings.component';

describe('SliderSetingsComponent', () => {
  let component: SliderSetingsComponent;
  let fixture: ComponentFixture<SliderSetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
