import { Component, OnInit } from '@angular/core';
import { AboutUsComponent } from '../about-us.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent extends AboutUsComponent implements OnInit {
  get subSiteIndex(): number {
    return 1;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
