import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caracters } from './caracters';

describe('Caracters', () => {
  let component: Caracters;
  let fixture: ComponentFixture<Caracters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caracters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caracters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
