import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirmaComponent } from './containers/about_us/firma/firma.component';
import { OwnerComponent } from './containers/about_us/owner/owner.component';
import { FunktionsExpertiseComponent } from './containers/funktions-expertise/funktions-expertise.component';
import { IndustrieExpertiseComponent } from './containers/industrie-expertise/industrie-expertise.component';
import { KontaktComponent } from './containers/kontakt/kontakt.component';
import { AssessmentComponent } from './containers/unser_angebot/assessment/assessment.component';
import { CoachingComponent } from './containers/unser_angebot/coaching/coaching.component';
import { ExecutiveSearchComponent } from './containers/unser_angebot/executive-search/executive-search.component';
import { OutplacementComponent } from './containers/unser_angebot/outplacement/outplacement.component';

export const routes: Routes = [
  { path: 'about_us', redirectTo: 'about_us/firma' },
  {
    path: 'about_us',
    children: [
      { path: 'firma', component: FirmaComponent },
      { path: 'owner', component: OwnerComponent },
    ],
  },
  { path: 'unser_angebot', redirectTo: 'unser_angebot/executive_search' },
  {
    path: 'unser_angebot',
    children: [
      { path: 'executive_search', component: ExecutiveSearchComponent },
      { path: 'assessment', component: AssessmentComponent },
      { path: 'coaching', component: CoachingComponent },
      { path: 'outplacement', component: OutplacementComponent },
    ],
  },
  { path: 'industrie_expertise', component: IndustrieExpertiseComponent },
  { path: 'funktions_expertise', component: FunktionsExpertiseComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: '', redirectTo: '/about_us/firma', pathMatch: 'full' },
  { path: '**', redirectTo: '/about_us/firma' }, // TODO: 404?
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
