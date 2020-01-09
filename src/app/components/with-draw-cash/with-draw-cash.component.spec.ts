import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDrawCashComponent } from './with-draw-cash.component';

describe('WithDrawCashComponent', () => {
  let component: WithDrawCashComponent;
  let fixture: ComponentFixture<WithDrawCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithDrawCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDrawCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
