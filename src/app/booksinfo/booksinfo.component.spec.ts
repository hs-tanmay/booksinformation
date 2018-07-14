import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksinfoComponent } from './booksinfo.component';

describe('BooksinfoComponent', () => {
  let component: BooksinfoComponent;
  let fixture: ComponentFixture<BooksinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
