import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenorstockComponent } from './menorstock.component';

describe('MenorstockComponent', () => {
  let component: MenorstockComponent;
  let fixture: ComponentFixture<MenorstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenorstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenorstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
