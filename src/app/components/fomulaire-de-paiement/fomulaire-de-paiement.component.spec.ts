import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomulaireDePaiementComponent } from './fomulaire-de-paiement.component';

describe('FomulaireDePaiementComponent', () => {
  let component: FomulaireDePaiementComponent;
  let fixture: ComponentFixture<FomulaireDePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomulaireDePaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomulaireDePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
