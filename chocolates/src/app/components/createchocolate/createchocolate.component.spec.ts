import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatechocolateComponent } from './createchocolate.component';

describe('CreatechocolatesComponent', () => {
  let component: CreatechocolateComponent;
  let fixture: ComponentFixture<CreatechocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatechocolateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatechocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
