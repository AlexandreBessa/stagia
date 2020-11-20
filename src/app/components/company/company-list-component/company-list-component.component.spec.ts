import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListComponentComponent } from './company-list-component.component';

describe('CompanyListComponentComponent', () => {
  let component: CompanyListComponentComponent;
  let fixture: ComponentFixture<CompanyListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
