import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCreateComponentComponent } from './company-create-component.component';

describe('CompanyCreateComponentComponent', () => {
  let component: CompanyCreateComponentComponent;
  let fixture: ComponentFixture<CompanyCreateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCreateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
