import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-funktions-expertise',
  templateUrl: './funktions-expertise.component.html',
  styleUrls: ['./funktions-expertise.component.scss'],
})
export class FunktionsExpertiseComponent
  extends BaseComponent
  implements OnInit {
  get siteIndex(): number {
    return 3;
  }

  get subSiteIndex(): number {
    return 0;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
