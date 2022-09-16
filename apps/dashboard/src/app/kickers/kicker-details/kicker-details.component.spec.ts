import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickerDetailsComponent } from './kicker-details.component';

describe('KickerDetailsComponent', () => {
  let component: KickerDetailsComponent;
  let fixture: ComponentFixture<KickerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KickerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KickerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
