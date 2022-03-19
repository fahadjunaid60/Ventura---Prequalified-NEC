import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecClaimEvalConfirmedComponent } from './nec-claim-eval-confirmed.component';

describe('NecClaimEvalConfirmedComponent', () => {
  let component: NecClaimEvalConfirmedComponent;
  let fixture: ComponentFixture<NecClaimEvalConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecClaimEvalConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecClaimEvalConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
