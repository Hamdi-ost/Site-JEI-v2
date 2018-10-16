import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Departement2Component } from './departement2.component';

describe('Departement2Component', () => {
  let component: Departement2Component;
  let fixture: ComponentFixture<Departement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Departement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Departement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
