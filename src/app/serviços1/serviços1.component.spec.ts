import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviços1Component } from './serviços1.component';

describe('Serviços1Component', () => {
  let component: Serviços1Component;
  let fixture: ComponentFixture<Serviços1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Serviços1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Serviços1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
