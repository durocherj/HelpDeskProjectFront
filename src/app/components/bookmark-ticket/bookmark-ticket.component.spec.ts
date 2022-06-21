import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTicketComponent } from './bookmark-ticket.component';

describe('BookmarkTicketComponent', () => {
  let component: BookmarkTicketComponent;
  let fixture: ComponentFixture<BookmarkTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
