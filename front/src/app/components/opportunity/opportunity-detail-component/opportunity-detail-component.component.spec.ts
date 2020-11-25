import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDetailComponentComponent } from './opportunity-detail-component.component';

describe('OpportunityDetailComponentComponent', () => {
  let component: OpportunityDetailComponentComponent;
  let fixture: ComponentFixture<OpportunityDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
