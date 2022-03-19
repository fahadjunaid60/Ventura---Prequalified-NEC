import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecClaimApplicationComponent } from './nec-claim-application.component';

describe('NecClaimApplicationComponent', () => {
  let component: NecClaimApplicationComponent;
  let fixture: ComponentFixture<NecClaimApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecClaimApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecClaimApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
