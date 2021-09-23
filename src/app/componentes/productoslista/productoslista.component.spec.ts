import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoslistaComponent } from './productoslista.component';

describe('ProductoslistaComponent', () => {
  let component: ProductoslistaComponent;
  let fixture: ComponentFixture<ProductoslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoslistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
