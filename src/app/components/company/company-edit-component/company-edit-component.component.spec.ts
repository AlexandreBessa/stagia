import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditComponentComponent } from './company-edit-component.component';

describe('CompanyEditComponentComponent', () => {
  let component: CompanyEditComponentComponent;
  let fixture: ComponentFixture<CompanyEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
