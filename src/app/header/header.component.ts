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
    ['Unser Angebot', []],
    ['Industrie Expertise', []],
    ['Funktions Expertise', []],
    ['Kontakt', []],
  ];

  selectedSiteIndex = 0;
  selectedSubIndex = 0;

  constructor() {}

  ngOnInit(): void {}
}
