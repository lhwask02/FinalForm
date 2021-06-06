import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPresenceComponent } from './hp-presence.component';

describe('HpPresenceComponent', () => {
  let component: HpPresenceComponent;
  let fixture: ComponentFixture<HpPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpPresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
