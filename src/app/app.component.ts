import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from './containers/base.component';
import { HeaderComponent } from './header/header.component';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(HeaderComponent)
  header!: HeaderComponent;

  title = 'ParaviciniAndPartners';

  displayOverlay = false;
  hasDisplayedOverlay = false;

  constructor(private location: Location) {}

  ngOnInit(): void {
    if (
      this.location.path() === '/about_us/firma' &&
      !this.hasDisplayedOverlay
    ) {
      this.displayOverlay = true;
    }
  }

  public onRouterOutletActivate(event: any): void {
    this.header.selectedSite = event as BaseComponent;
  }
}
