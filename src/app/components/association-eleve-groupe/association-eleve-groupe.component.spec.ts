import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationEleveGroupeComponent } from './association-eleve-groupe.component';

describe('AssociationEleveGroupeComponent', () => {
  let component: AssociationEleveGroupeComponent;
  let fixture: ComponentFixture<AssociationEleveGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationEleveGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationEleveGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
