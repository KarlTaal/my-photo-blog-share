import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketSubmissionComponent } from './support-ticket-submission.component';

describe('SupportTicketSubmissionComponent', () => {
  let component: SupportTicketSubmissionComponent;
  let fixture: ComponentFixture<SupportTicketSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportTicketSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportTicketSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
