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
import { SEOService } from './services/seo.service';

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SEOService
  ) {
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

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this.seoService.updateTitle(event.title);
        this.seoService.updateOgUrl(event.ogUrl);
        this.seoService.updateDescription(event.description);
      });
  }

  public onRouterOutletActivate(event: any): void {
    this.header.selectedSite = event as BaseComponent;
  }
}
