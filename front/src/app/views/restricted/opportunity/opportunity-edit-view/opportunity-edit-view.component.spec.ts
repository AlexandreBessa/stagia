import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityEditViewComponent } from './opportunity-edit-view.component';

describe('OpportunityEditViewComponent', () => {
  let component: OpportunityEditViewComponent;
  let fixture: ComponentFixture<OpportunityEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
