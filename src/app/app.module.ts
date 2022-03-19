import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NecClaimApplicationComponent } from './NEC-Claims/nec-claim-application/nec-claim-application.component';
import { NecClaimEvaluationComponent } from './NEC-Claims/nec-claim-evaluation/nec-claim-evaluation.component';
import { NecClaimEvalConfirmedComponent } from './NEC-Claims/nec-claim-eval-confirmed/nec-claim-eval-confirmed.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NecCaseInformationFormComponent } from './Intake-Funnel/nec-case-information-form/nec-case-information-form.component';
import { ThankYouPageComponent } from './Intake-Funnel/thank-you-page/thank-you-page.component';
import { NecIntakeQuestionnaireComponent } from './Intake-Funnel/nec-intake-questionnaire/nec-intake-questionnaire.component';
import { HttpClientModule} from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {IntlTelInputNgModule} from 'intl-tel-input-ng';
@NgModule({
  declarations: [
    AppComponent,
    NecClaimApplicationComponent,
    NecClaimEvaluationComponent,
    NecClaimEvalConfirmedComponent,
    NecCaseInformationFormComponent,
    ThankYouPageComponent,
    NecIntakeQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    IntlTelInputNgModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
