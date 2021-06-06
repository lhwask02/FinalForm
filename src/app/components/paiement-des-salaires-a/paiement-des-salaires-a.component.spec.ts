import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementDesSalairesAComponent } from './paiement-des-salaires-a.component';

describe('PaiementDesSalairesAComponent', () => {
  let component: PaiementDesSalairesAComponent;
  let fixture: ComponentFixture<PaiementDesSalairesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementDesSalairesAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementDesSalairesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
