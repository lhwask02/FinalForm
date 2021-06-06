import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleMenuComponent } from './middle-menu.component';

describe('MiddleMenuComponent', () => {
  let component: MiddleMenuComponent;
  let fixture: ComponentFixture<MiddleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
