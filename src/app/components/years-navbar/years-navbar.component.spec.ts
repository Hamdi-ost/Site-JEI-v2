import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsNavbarComponent } from './years-navbar.component';

describe('YearsNavbarComponent', () => {
  let component: YearsNavbarComponent;
  let fixture: ComponentFixture<YearsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
