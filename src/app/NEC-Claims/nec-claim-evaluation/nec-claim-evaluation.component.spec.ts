import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecClaimEvaluationComponent } from './nec-claim-evaluation.component';

describe('NecClaimEvaluationComponent', () => {
  let component: NecClaimEvaluationComponent;
  let fixture: ComponentFixture<NecClaimEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecClaimEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecClaimEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
