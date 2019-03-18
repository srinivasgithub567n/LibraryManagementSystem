import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookviewsComponent } from './bookviews.component';

describe('BookviewsComponent', () => {
  let component: BookviewsComponent;
  let fixture: ComponentFixture<BookviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
