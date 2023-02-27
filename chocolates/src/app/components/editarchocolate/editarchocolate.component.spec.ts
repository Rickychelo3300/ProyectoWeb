import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarchocolateComponent } from './editarchocolate.component';

describe('EditarchocolateComponent', () => {
  let component: EditarchocolateComponent;
  let fixture: ComponentFixture<EditarchocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarchocolateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarchocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
