import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contatos1Component } from './contatos1.component';

describe('Contatos1Component', () => {
  let component: Contatos1Component;
  let fixture: ComponentFixture<Contatos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contatos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contatos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
