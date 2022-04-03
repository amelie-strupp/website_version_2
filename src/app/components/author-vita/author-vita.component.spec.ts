import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorVitaComponent } from './author-vita.component';

describe('AuthorVitaComponent', () => {
  let component: AuthorVitaComponent;
  let fixture: ComponentFixture<AuthorVitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorVitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorVitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
