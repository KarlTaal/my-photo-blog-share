import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpbsButtonComponent } from './mpbs-button.component';

describe('MpbsButtonComponent', () => {
  let component: MpbsButtonComponent;
  let fixture: ComponentFixture<MpbsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpbsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpbsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
