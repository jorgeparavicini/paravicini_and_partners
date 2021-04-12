import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuButtonComponent } from '../components/menu-button/menu-button.component';
import { BaseComponent } from '../containers/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu')
  menu!: MenuButtonComponent;

  sites = [
    {
      name: 'About Us',
      url: '/about_us',
      subSites: [
        { name: 'Firma', url: '/about_us/firma' },
        { name: 'Owner', url: '/about_us/owner' },
      ],
      common: false,
    },
    {
      name: 'Unser Angebot',
      url: '/unser_angebot',
      subSites: [
        { name: 'Executive Search', url: '/unser_angebot/executive_search' },
        { name: 'Assessment', url: '/unser_angebot/assessment' },
        { name: 'Coaching', url: '/unser_angebot/coaching' },
        { name: 'Outplacement', url: '/unser_angebot/outplacement' },
      ],
      common: false,
    },
    {
      name: 'Industrie Expertise',
      url: '/industrie_expertise',
      subSites: [
        { name: 'Industrie', url: '/inudstrie_expertise' },
        { name: 'Technologie', url: '/inudstrie_expertise' },
        { name: 'IT & Telekommunikation', url: '/inudstrie_expertise' },
      ],
      common: true,
    },
    {
      name: 'Funktions Expertise',
      url: '/funktions_expertise',
      subSites: [
        { name: 'Board', url: '/funktions_expertise' },
        { name: 'CEO & Management', url: '/funktions_expertise' },
        { name: 'CFO & Finance', url: '/funktions_expertise' },
        { name: 'CIO & Digital', url: '/funktions_expertise' },
      ],
      common: true,
    },
    {
      name: 'Kontakt',
      url: '/kontakt',
      subSites: [{ name: 'Informationen', url: '/kontakt' }],
      common: true,
    },
  ];

  selectedSite?: BaseComponent;

  ngOnInit(): void {}

  public onRouterOutletActivate(event: any) {
    this.selectedSite = event as BaseComponent;
  }
}
