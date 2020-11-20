import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityEditComponentComponent } from './opportunity-edit-component.component';

describe('OpportunityEditComponentComponent', () => {
  let component: OpportunityEditComponentComponent;
  let fixture: ComponentFixture<OpportunityEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
