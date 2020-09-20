import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelipeComponent } from './felipe.component';

describe('FelipeComponent', () => {
  let component: FelipeComponent;
  let fixture: ComponentFixture<FelipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FelipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
