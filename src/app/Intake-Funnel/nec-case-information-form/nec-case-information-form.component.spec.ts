import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecCaseInformationFormComponent } from './nec-case-information-form.component';

describe('NecCaseInformationFormComponent', () => {
  let component: NecCaseInformationFormComponent;
  let fixture: ComponentFixture<NecCaseInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecCaseInformationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecCaseInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
