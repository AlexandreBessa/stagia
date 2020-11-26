import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDetailViewComponent } from './opportunity-detail-view.component';

describe('OpportunityDetailViewComponent', () => {
  let component: OpportunityDetailViewComponent;
  let fixture: ComponentFixture<OpportunityDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
