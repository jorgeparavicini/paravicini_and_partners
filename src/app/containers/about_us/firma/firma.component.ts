import { Component, OnInit } from '@angular/core';
import { AboutUsComponent } from '../about-us.component';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.scss'],
})
export class FirmaComponent extends AboutUsComponent implements OnInit {
  get subSiteIndex(): number {
    return 0;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
