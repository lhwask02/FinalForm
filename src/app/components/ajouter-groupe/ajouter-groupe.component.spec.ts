import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGroupeComponent } from './ajouter-groupe.component';

describe('AjouterGroupeComponent', () => {
  let component: AjouterGroupeComponent;
  let fixture: ComponentFixture<AjouterGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
