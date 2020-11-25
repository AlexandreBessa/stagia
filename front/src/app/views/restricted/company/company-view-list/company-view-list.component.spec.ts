import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewListComponent } from './company-view-list.component';

describe('CompanyViewListComponent', () => {
  let component: CompanyViewListComponent;
  let fixture: ComponentFixture<CompanyViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
