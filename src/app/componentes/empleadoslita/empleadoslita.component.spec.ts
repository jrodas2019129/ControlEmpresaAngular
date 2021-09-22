import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoslitaComponent } from './empleadoslita.component';

describe('EmpleadoslitaComponent', () => {
  let component: EmpleadoslitaComponent;
  let fixture: ComponentFixture<EmpleadoslitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoslitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoslitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
