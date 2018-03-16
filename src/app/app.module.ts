import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

var fbconfig = {
    apiKey: "AIzaSyD8RFuPpBMj2msM29-cxPLhsfOvBGNJuCM",
    authDomain: "ng-portfolio-2018.firebaseapp.com",
    databaseURL: "https://ng-portfolio-2018.firebaseio.com",
    projectId: "ng-portfolio-2018",
    storageBucket: "ng-portfolio-2018.appspot.com",
    messagingSenderId: "692396458715"
};

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {PortfolioModule} from "./portfolio/portfolio.module";
import {AdminModule} from "./admin/admin.module";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fbconfig),
    AngularFirestoreModule,
    RouterModule,
    AppRoutingModule,


    PortfolioModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
