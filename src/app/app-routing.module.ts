import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NecCaseInformationFormComponent } from './Intake-Funnel/nec-case-information-form/nec-case-information-form.component';
import { NecIntakeQuestionnaireComponent } from './Intake-Funnel/nec-intake-questionnaire/nec-intake-questionnaire.component';
import { ThankYouPageComponent } from './Intake-Funnel/thank-you-page/thank-you-page.component';
import { NecClaimApplicationComponent } from './NEC-Claims/nec-claim-application/nec-claim-application.component';
import { NecClaimEvalConfirmedComponent } from './NEC-Claims/nec-claim-eval-confirmed/nec-claim-eval-confirmed.component';
import { NecClaimEvaluationComponent } from './NEC-Claims/nec-claim-evaluation/nec-claim-evaluation.component';

const routes: Routes = [

  /*Nec Claims Funnel*/
  {path:'',component:NecClaimApplicationComponent},
  {path:'nec-claim-eval', component:NecClaimEvaluationComponent},
  {path:'claim-eval-confirmed',component:NecClaimEvalConfirmedComponent}

  /*Intake Funnel*/,
  {path:'prequal-case-information',component:NecCaseInformationFormComponent},
  {path:'prequal-nec-intake-questionnaire', component:NecIntakeQuestionnaireComponent},
  {path:'prequal-case-informaton-thank-you',component:ThankYouPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
