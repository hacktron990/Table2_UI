import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueNewComponent } from './queue-new.component';

describe('QueueNewComponent', () => {
  let component: QueueNewComponent;
  let fixture: ComponentFixture<QueueNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
