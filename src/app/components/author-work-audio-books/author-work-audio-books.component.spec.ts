import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWorkAudioBooksComponent } from './author-work-audio-books.component';

describe('AuthorWorkAudioBooksComponent', () => {
  let component: AuthorWorkAudioBooksComponent;
  let fixture: ComponentFixture<AuthorWorkAudioBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWorkAudioBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWorkAudioBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
