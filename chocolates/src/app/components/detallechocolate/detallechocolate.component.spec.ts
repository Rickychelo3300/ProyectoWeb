import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallechocolateComponent } from './detallechocolate.component';

describe('DetallechocolateComponent', () => {
  let component: DetallechocolateComponent;
  let fixture: ComponentFixture<DetallechocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallechocolateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallechocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
