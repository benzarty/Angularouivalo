import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageTestComponent } from './send-message-test.component';

describe('SendMessageTestComponent', () => {
  let component: SendMessageTestComponent;
  let fixture: ComponentFixture<SendMessageTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMessageTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
