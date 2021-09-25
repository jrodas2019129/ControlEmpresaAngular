import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorstockComponent } from './mayorstock.component';

describe('MayorstockComponent', () => {
  let component: MayorstockComponent;
  let fixture: ComponentFixture<MayorstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayorstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
