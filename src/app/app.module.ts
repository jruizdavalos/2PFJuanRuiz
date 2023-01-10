import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkeletonComponent } from './layouts/skeleton/skeleton.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LeftNavComponent } from './layouts/left-nav/left-nav.component';
import { LeftNavMenuComponent } from './layouts/left-nav/left-nav-menu/left-nav-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    LeftNavComponent,
    LeftNavMenuComponent,
  ],
  imports: [
    BrowserModule,

    //core

    SharedModule,
    AppRoutingModule,
    CoreModule,
    NgbModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
