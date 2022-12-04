import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWorkPoemsComponent } from './author-work-poems.component';

describe('AuthorWorkPoemsComponent', () => {
  let component: AuthorWorkPoemsComponent;
  let fixture: ComponentFixture<AuthorWorkPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWorkPoemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWorkPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
