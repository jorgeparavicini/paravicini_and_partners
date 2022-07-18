import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MenuButtonComponent } from '../components/menu-button/menu-button.component';
import { BaseComponent } from '../containers/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('menu')
  menu!: MenuButtonComponent;

  @Input()
  selectedSite!: BaseComponent;

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
      name: 'Branchen Expertise',
      url: '/branchen_expertise',
      subSites: [
        { name: 'Industrie', url: '/branchen_expertise' },
        { name: 'Technologie', url: '/branchen_expertise' },
        { name: 'IT & Telekommunikation', url: '/branchen_expertise' },
      ],
      common: true,
    },
    {
      name: 'Funktions Expertise',
      url: '/funktions_expertise',
      subSites: [
        { name: 'Funktionen', url: '/funktions_expertise' },
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

  @HostListener('window:resize') onResize() {
    this.checkMenuState();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.checkMenuState();
  }

  private checkMenuState(): void {
    if (this.menu && typeof window !== 'undefined') {
      if (window.innerWidth >= 768) {
        this.menu.setOpenState(true);
      } else {
        this.menu.setOpenState(false);
      }
    }
  }
}
