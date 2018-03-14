import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {PortfolioModule} from "./portfolio/portfolio.module";
import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,

    RouterModule,
    AppRoutingModule,

    PortfolioModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
