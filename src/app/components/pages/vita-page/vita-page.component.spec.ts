import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaPageComponent } from './vita-page.component';

describe('VitaPageComponent', () => {
  let component: VitaPageComponent;
  let fixture: ComponentFixture<VitaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
