import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationDesPaiementsComponent } from './situation-des-paiements.component';

describe('SituationDesPaiementsComponent', () => {
  let component: SituationDesPaiementsComponent;
  let fixture: ComponentFixture<SituationDesPaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationDesPaiementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationDesPaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
