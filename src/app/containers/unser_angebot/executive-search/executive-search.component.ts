import { Component, OnInit } from '@angular/core';
import { UnserAngebotComponent } from '../unser_angebot.component';

@Component({
  selector: 'app-executive-search',
  templateUrl: './executive-search.component.html',
  styleUrls: ['./executive-search.component.scss'],
})
export class ExecutiveSearchComponent
  extends UnserAngebotComponent
  implements OnInit {
  get subSiteIndex(): number {
    return 0;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
