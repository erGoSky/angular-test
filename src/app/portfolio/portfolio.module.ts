import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import {SliderComponent} from "../slider/slider.component";
import {NgxCarouselModule} from "ngx-carousel";

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgxCarouselModule
  ],
  declarations: [PortfolioComponent,SliderComponent]
})
export class PortfolioModule { }
