import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpAbsenceComponent } from './hp-absence.component';

describe('HpAbsenceComponent', () => {
  let component: HpAbsenceComponent;
  let fixture: ComponentFixture<HpAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpAbsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
