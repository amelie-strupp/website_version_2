import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBooksComponent } from './shop-books.component';

describe('ShopBooksComponent', () => {
  let component: ShopBooksComponent;
  let fixture: ComponentFixture<ShopBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
