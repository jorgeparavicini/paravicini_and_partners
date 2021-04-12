import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent extends BaseComponent implements OnInit {
  get siteIndex(): number {
    return 4;
  }

  get subSiteIndex(): number {
    return 0;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
