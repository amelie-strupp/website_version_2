import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWorkComponent } from './author-work.component';

describe('AuthorWorkComponent', () => {
  let component: AuthorWorkComponent;
  let fixture: ComponentFixture<AuthorWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
