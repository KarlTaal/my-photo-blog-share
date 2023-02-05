import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpbsCloseButtonComponent } from './mpbs-close-button.component';

describe('MpbsCloseButtonComponent', () => {
  let component: MpbsCloseButtonComponent;
  let fixture: ComponentFixture<MpbsCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpbsCloseButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpbsCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
