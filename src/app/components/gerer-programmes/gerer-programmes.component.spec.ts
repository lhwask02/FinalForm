import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProgrammesComponent } from './gerer-programmes.component';

describe('GererProgrammesComponent', () => {
  let component: GererProgrammesComponent;
  let fixture: ComponentFixture<GererProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererProgrammesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
