import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiobookItemComponent } from './audiobook-item.component';

describe('AudiobookItemComponent', () => {
  let component: AudiobookItemComponent;
  let fixture: ComponentFixture<AudiobookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiobookItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiobookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
