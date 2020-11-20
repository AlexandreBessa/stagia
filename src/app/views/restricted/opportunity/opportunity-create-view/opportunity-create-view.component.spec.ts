import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCreateViewComponent } from './opportunity-create-view.component';

describe('OpportunityCreateViewComponent', () => {
  let component: OpportunityCreateViewComponent;
  let fixture: ComponentFixture<OpportunityCreateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityCreateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
