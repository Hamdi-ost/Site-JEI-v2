import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Departement1Component } from './departement1.component';

describe('Departement1Component', () => {
  let component: Departement1Component;
  let fixture: ComponentFixture<Departement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Departement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Departement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
