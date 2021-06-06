import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversedEmploisComponent } from './reversed-emplois.component';

describe('ReversedEmploisComponent', () => {
  let component: ReversedEmploisComponent;
  let fixture: ComponentFixture<ReversedEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversedEmploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversedEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
