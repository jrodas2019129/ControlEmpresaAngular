import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoencontradoComponent } from './productoencontrado.component';

describe('ProductoencontradoComponent', () => {
  let component: ProductoencontradoComponent;
  let fixture: ComponentFixture<ProductoencontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoencontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
