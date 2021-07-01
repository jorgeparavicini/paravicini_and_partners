import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirmaComponent } from './containers/about_us/firma/firma.component';
import { OwnerComponent } from './containers/about_us/owner/owner.component';
import { DatenschutzComponent } from './containers/datenschutz/datenschutz.component';
import { FunktionsExpertiseComponent } from './containers/funktions-expertise/funktions-expertise.component';
import { ImpressumComponent } from './containers/impressum/impressum.component';
import { IndustrieExpertiseComponent } from './containers/industrie-expertise/industrie-expertise.component';
import { KontaktComponent } from './containers/kontakt/kontakt.component';
import { AssessmentComponent } from './containers/unser_angebot/assessment/assessment.component';
import { CoachingComponent } from './containers/unser_angebot/coaching/coaching.component';
import { ExecutiveSearchComponent } from './containers/unser_angebot/executive-search/executive-search.component';
import { OutplacementComponent } from './containers/unser_angebot/outplacement/outplacement.component';

export const routes: Routes = [
  {
    path: 'about_us',
    redirectTo: 'about_us/firma',
    data: {
      title: 'Paravicini & Partners - About us',
      description: `
       Paravicini & Partners ist ein eigenständiges
       Schweizerisches Executive Search Unternehmen.
       Wir unterstützen unsere Kunden in einer ganzheitlichen
       Beratung bei der Suche nach neuen internationalen und
       nationalen Führungspersönlichkeiten. Unser Angebot
       umfasst Executive Search, Assessment, Outplacement und Coaching`,
      ogUrl: 'https://paravicini-partners.ch/about_us/firma',
    },
  },
  {
    path: 'about_us',
    children: [
      {
        path: 'firma',
        component: FirmaComponent,
        data: {
          title: 'Paravicini & Partners - About us',
          description: `
          Paravicini & Partners ist ein eigenständiges
          Schweizerisches Executive Search Unternehmen.
          Wir unterstützen unsere Kunden in einer ganzheitlichen
          Beratung bei der Suche nach neuen internationalen und
          nationalen Führungspersönlichkeiten. Unser Angebot
          umfasst Executive Search, Assessment, Outplacement und Coaching`,
          ogUrl: 'https://paravicini-partners.ch/about_us/firma',
        },
      },
      {
        path: 'owner',
        component: OwnerComponent,
        data: {
          title: 'Paravicini & Partners - Owner',
          description: `Rafael Paravicini führt als Managing Partner das eigenständige
           Executive Search Unternehmen Paravicini & Partners. Er
           ist auf Unternehmen des Technologie- und Industriesektors
           spezialisiert und hat während seiner über zwanzigjährigen
           Tätigkeit auf diesem Gebiet zahlreiche Vermittlungen
           im Top-Management-Bereich, vorwiegend für internationale
            Kunden, aber auch für nationale Firmen, abschliessen können.
            Rafael Paravicini hat sich zusätzlich auf die Suche von CFO und CIO Mandate
            spezialisiert und hat zahlreiche Finanz- und IT-Positionen
            in der Schweiz besetzt. Rafael Paravicini ist zusätzlich auch als
            Advisor bei Heidrick & Struggles tätig und unterstützt die globale Firma in komplexen Such-Mandaten.`,
          ogUrl: 'https://paravicini-partners.ch/about_us/owner',
        },
      },
    ],
  },
  {
    path: 'unser_angebot',
    redirectTo: 'unser_angebot/executive_search',
    data: {
      title: 'Paravicini & Partners - Executive Search',
      description: 'Executive Search',
      ogUrl: 'https://paravicini-partners.ch/unser_angebot/executive_search/',
    },
  },
  {
    path: 'unser_angebot',
    children: [
      {
        path: 'executive_search',
        component: ExecutiveSearchComponent,
        data: {
          title: 'Paravicini & Partners - Executive Search',
          description: `Die Beratungsleistung der Paravicini & Partners besteht
          in der systematischen Identifikation und Auswahl geeigneter Kandidaten
          auf der Basis von klar definierten Prozessen. Ziel ist es, in der
          schnellstmöglichen Zeit unter Einhaltung unserer hohen Qualitätsansprüche
          den Personalbedarf unserer Kunden zu decken. Wir offerieren auch ein umfassendes Mapping.`,
          ogUrl:
            'https://paravicini-partners.ch/unser_angebot/executive_search/',
        },
      },
      {
        path: 'assessment',
        component: AssessmentComponent,
        data: {
          title: 'Paravicini & Partners - Assessment',
          description: `Ein zusätzliches Assessment kann Sicherheit in der Selektion
          des Kandidaten aufbauen. Eventuell haben Sie einen Kandidaten für eine
           bestimmte Position evaluiert und sind unsicher, ob die Selektion professionell
            stattgefunden hat, ob keine interne Seilschaften den Kandidaten bevorzugt
            haben, ob die richtigen Referenzen eingeholt wurden, ob ein Vergleich zu internen
            Kandidaten professionell durchgeführt wurde und ob die Kandidaten einen externen
            Benchmark genügen. Hier kann ein externes Assessment Klarheit schaffen und die Stärken
             und Schwächen der Kandidaten transparent aufzeigen. So können für die
             Schwächen entsprechende Coaching Programme berücksichtigt werden, um den Erfolg des Placements zu festigen.`,
          ogUrl: 'https://paravicini-partners.ch/unser_angebot/assessment/',
        },
      },
      {
        path: 'coaching',
        component: CoachingComponent,
        data: {
          title: 'Paravicini & Partners - Coaching',
          description: `Beim Executive Coaching geht es uns grundsätzlich um die Schaffung
          eines vertrauensvollen und sicheren Raumes für Führungskräfte, um ihre Denkmuster
          und Verhaltensweisen zu hinterfragen und neue Erkenntnisse zu generieren. Als
          Berater und Coach verfügen wir über jahrelange Erfahrung im Coaching von
          Führungskräften und verhelfen ihnen dabei die Leistung ihrer Führungskräfte
          zu verbessern, transformative Veränderungen anzustoßen und die Zukunft zu gestalten`,
          ogUrl: 'https://paravicini-partners.ch/unser_angebot/coaching/',
        },
      },
      {
        path: 'outplacement',
        component: OutplacementComponent,
        data: {
          title: 'Paravicini & Partners - Outplacement',
          description: `Paravicini & Partners begleitet und beratet Führungspersonen
          bei ihrer Standortbestimmung und beruflichen Neuorientierung, dies
          vor allem mit Zuversicht, Freude und Neugier. Jede Führungspersönlichkeit
           hat sehr individuelle Bedürfnisse und Erwartungen. Wir nehmen uns Zeit
           diese zu verstehen, zu reflektieren und weiterzuentwickeln. Eine umfassende
           Standortbestimmung, das Verstehen der Eignung und Interessenlage und die Ausarbeitung
           eines Kompetenzen-Profils bilden die Basis für die richtige Positionierung der
           Kandidaten im Markt. Durch unser grosses Netzwerk unterstützen wir die
           Kandidaten in der Erfüllung ihres nächsten Karriereschrittes.`,
          ogUrl: 'https://paravicini-partners.ch/unser_angebot/outplacement/',
        },
      },
    ],
  },
  {
    path: 'industrie_expertise',
    component: IndustrieExpertiseComponent,
    data: {
      title: 'Paravicini & Partners - Industrie Expertise',
      description: `Paravicini & Partners hat über 30 Jahre Erfahrung in der
      Industrie- und der Technologie-Branche. In der Technologie-Branche
       haben wir eine tiefe Spezialisierung im IT- , Software-,
       Digital- und im gesamten Telekommunikations-Sektor. Wir
       haben in der Schweiz über 700 Platzierungen in diesen Branchen erfolgreich abgeschlossen.`,
      ogUrl: 'https://paravicini-partners.ch/industrie_expertise/',
    },
  },
  {
    path: 'funktions_expertise',
    component: FunktionsExpertiseComponent,
    data: {
      title: 'Paravicini & Partners - Funktions Expertise',
      description: `Paravicini & Partner fokussiert sich mehr als 20 Jahren
       auf die folgenden Positionen: Verwaltungsräte & Board Members, CEO & Management, CFO & Finance, CIO & Digital`,
      ogUrl: 'https://paravicini-partners.ch/funktions_expertise/',
    },
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
    data: {
      title: 'Paravicini & Partners - Kontakt',
      description: `Paravicini & Partners GmbH, Rafael Paravicini, Managing Partner,
      paravicini@paravicini-partners.ch  <mailto:rafael.paravicini@icloud.com>,
      www.paravicini-partners.ch <http://www.paravicini-partners.ch>,  Advisor Heidrick & Struggles`,
      ogUrl: 'https://paravicini-partners.ch/kontakt/',
    },
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
    data: {
      title: 'Paravicini & Partners - Impressum',
      description: 'Impressum',
      ogUrl: 'https://paravicini-partners.ch//impressum/',
    },
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
    data: {
      title: 'Paravicini & Partners - Datenschutz',
      description: 'Datenschutz',
      ogUrl: 'https://paravicini-partners.ch/datenschutz/',
    },
  },
  {
    path: '',
    pathMatch: 'full',
    component: FirmaComponent,
    data: {
      showOverlay: true,
      title: 'Paravicini & Partners - About us',
      description: `
      Paravicini & Partners ist ein eigenständiges
      Schweizerisches Executive Search Unternehmen.
      Wir unterstützen unsere Kunden in einer ganzheitlichen
      Beratung bei der Suche nach neuen internationalen und
      nationalen Führungspersönlichkeiten. Unser Angebot
      umfasst Executive Search, Assessment, Outplacement und Coaching`,
      ogUrl: 'https://paravicini-partners.ch/about_us/firma',
    },
  },
  {
    path: '**',
    redirectTo: '/about_us/firma',
    data: {
      title: 'Paravicini & Partners - About us',
      description: `
      Paravicini & Partners ist ein eigenständiges
      Schweizerisches Executive Search Unternehmen.
      Wir unterstützen unsere Kunden in einer ganzheitlichen
      Beratung bei der Suche nach neuen internationalen und
      nationalen Führungspersönlichkeiten. Unser Angebot
      umfasst Executive Search, Assessment, Outplacement und Coaching`,
      ogUrl: 'https://paravicini-partners.ch/about_us/firma',
    },
  }, // TODO: 404?
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
