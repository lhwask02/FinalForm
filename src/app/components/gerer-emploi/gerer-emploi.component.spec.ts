import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererEmploiComponent } from './gerer-emploi.component';

describe('GererEmploiComponent', () => {
  let component: GererEmploiComponent;
  let fixture: ComponentFixture<GererEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererEmploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
