import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailComponentComponent } from './company-detail-component.component';

describe('CompanyDetailComponentComponent', () => {
  let component: CompanyDetailComponentComponent;
  let fixture: ComponentFixture<CompanyDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
