import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSmallScreensComponent } from './navigation-small-screens.component';

describe('NavigationSmallScreensComponent', () => {
  let component: NavigationSmallScreensComponent;
  let fixture: ComponentFixture<NavigationSmallScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationSmallScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSmallScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
