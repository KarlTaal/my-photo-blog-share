import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpbsBadgeButtonComponent } from './mpbs-badge-button.component';

describe('MpbsBadgeButtonComponent', () => {
  let component: MpbsBadgeButtonComponent;
  let fixture: ComponentFixture<MpbsBadgeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpbsBadgeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpbsBadgeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
