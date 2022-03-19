import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecIntakeQuestionnaireComponent } from './nec-intake-questionnaire.component';

describe('NecIntakeQuestionnaireComponent', () => {
  let component: NecIntakeQuestionnaireComponent;
  let fixture: ComponentFixture<NecIntakeQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecIntakeQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecIntakeQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
