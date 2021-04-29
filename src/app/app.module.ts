import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { SitesModule } from './containers/sites.module';
import { HeaderComponent } from './header/header.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuButtonComponent, OverlayComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SitesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
