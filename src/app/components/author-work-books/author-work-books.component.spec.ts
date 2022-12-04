import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWorkBooksComponent } from './author-work-books.component';

describe('AuthorWorkBooksComponent', () => {
  let component: AuthorWorkBooksComponent;
  let fixture: ComponentFixture<AuthorWorkBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWorkBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWorkBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
