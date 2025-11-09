import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Easteregg } from './easteregg';

describe('Easteregg', () => {
  let component: Easteregg;
  let fixture: ComponentFixture<Easteregg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Easteregg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Easteregg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
