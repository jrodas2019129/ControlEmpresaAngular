import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoencontradoComponent } from './empleadoencontrado.component';

describe('EmpleadoencontradoComponent', () => {
  let component: EmpleadoencontradoComponent;
  let fixture: ComponentFixture<EmpleadoencontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoencontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
