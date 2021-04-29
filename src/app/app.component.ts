import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ActivationStart,
  NavigationEnd,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { BaseComponent } from './containers/base.component';
import { HeaderComponent } from './header/header.component';
import { map, filter, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(HeaderComponent)
  header!: HeaderComponent;

  title = 'ParaviciniAndPartners';

  displayOverlay$: Observable<boolean>;

  constructor(router: Router, activatedRoute: ActivatedRoute) {
    this.displayOverlay$ = router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap((route) => route.data),
      map((data) =>
        data.hasOwnProperty('showOverlay') ? data.showOverlay : false
      )
    );
  }

  ngOnInit(): void {}

  public onRouterOutletActivate(event: any): void {
    this.header.selectedSite = event as BaseComponent;
  }
}
