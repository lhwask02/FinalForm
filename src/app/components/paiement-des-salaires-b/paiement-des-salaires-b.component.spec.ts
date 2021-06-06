import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementDesSalairesBComponent } from './paiement-des-salaires-b.component';

describe('PaiementDesSalairesBComponent', () => {
  let component: PaiementDesSalairesBComponent;
  let fixture: ComponentFixture<PaiementDesSalairesBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementDesSalairesBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementDesSalairesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
