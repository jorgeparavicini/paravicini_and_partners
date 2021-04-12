import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirmaComponent } from './about_us/firma/firma.component';
import { OwnerComponent } from './about_us/owner/owner.component';
import { FunktionsExpertiseComponent } from './funktions-expertise/funktions-expertise.component';
import { IndustrieExpertiseComponent } from './industrie-expertise/industrie-expertise.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AssessmentComponent } from './unser_angebot/assessment/assessment.component';
import { CoachingComponent } from './unser_angebot/coaching/coaching.component';
import { ExecutiveSearchComponent } from './unser_angebot/executive-search/executive-search.component';
import { OutplacementComponent } from './unser_angebot/outplacement/outplacement.component';

@NgModule({
  declarations: [
    ExecutiveSearchComponent,
    AssessmentComponent,
    CoachingComponent,
    OutplacementComponent,
    FunktionsExpertiseComponent,
    KontaktComponent,
    FirmaComponent,
    OwnerComponent,
    IndustrieExpertiseComponent,
  ],
  imports: [CommonModule],
})
export class SitesModule {}
