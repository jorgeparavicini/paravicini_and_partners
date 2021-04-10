import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuButtonComponent } from '../components/menu-button/menu-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu')
  menu!: MenuButtonComponent;

  readonly sites: [string, string[]][] = [
    ['About Us', ['Firma', 'Owner']],
    [
      'Unser Angebot',
      ['Executive Search', 'Assessment', 'Coaching', 'Outplacement'],
    ],
    [
      'Industrie Expertise',
      ['Industrie', 'Technologie', 'IT & Telekommunikation'],
    ],
    [
      'Funktions Expertise',
      ['Board', 'CEO & Management', 'CFO & Finance', 'CIO & Digital'],
    ],
    ['Kontakt', ['Informationen']],
  ];

  selectedSiteIndex = 0;
  selectedSubIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  public sanitizeString(s: string): string {
    return s.replace(' ', '_');
  }
}
