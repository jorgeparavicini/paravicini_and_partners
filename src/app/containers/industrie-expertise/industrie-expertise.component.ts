import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-industrie-expertise',
  templateUrl: './industrie-expertise.component.html',
  styleUrls: ['./industrie-expertise.component.scss'],
})
export class IndustrieExpertiseComponent
  extends BaseComponent
  implements OnInit {
  get siteIndex(): number {
    return 2;
  }

  get subSiteIndex(): number {
    return 0;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
