import { Component, ViewChild } from '@angular/core';
import { BaseComponent } from './containers/base.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(HeaderComponent)
  header!: HeaderComponent;

  title = 'ParaviciniAndPartners';

  public onRouterOutletActivate(event: any) {
    this.header.selectedSite = event as BaseComponent;
  }
}
