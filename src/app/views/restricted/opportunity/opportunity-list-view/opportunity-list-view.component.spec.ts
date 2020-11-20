import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityListViewComponent } from './opportunity-list-view.component';

describe('OpportunityListViewComponent', () => {
  let component: OpportunityListViewComponent;
  let fixture: ComponentFixture<OpportunityListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
