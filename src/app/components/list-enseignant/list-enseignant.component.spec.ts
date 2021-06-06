import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnseignantComponent } from './list-enseignant.component';

describe('ListEnseignantComponent', () => {
  let component: ListEnseignantComponent;
  let fixture: ComponentFixture<ListEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
