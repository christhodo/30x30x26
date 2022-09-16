import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickersComponent } from './kickers.component';

describe('KickersComponent', () => {
  let component: KickersComponent;
  let fixture: ComponentFixture<KickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KickersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
