import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickersListComponent } from './kickers-list.component';

describe('KickersListComponent', () => {
  let component: KickersListComponent;
  let fixture: ComponentFixture<KickersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KickersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KickersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
