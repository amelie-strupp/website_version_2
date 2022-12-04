import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAudioBooksComponent } from './shop-audio-books.component';

describe('ShopAudioBooksComponent', () => {
  let component: ShopAudioBooksComponent;
  let fixture: ComponentFixture<ShopAudioBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAudioBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAudioBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
