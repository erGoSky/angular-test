import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Slide {
  title: string;
  url: string;
}


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slideCol: AngularFirestoreCollection<Slide>;
  slides: Observable<Slide[]>;

  constructor(private afs: AngularFirestore) { }

  public carouselOne: NgxCarousel;

  ngOnInit() {
    this.slideCol = this.afs.collection('slides');
    let test = this.afs.collection('slides').doc('JlC3OlkN2JO7RZQ9UzHU');
    this.slides = this.slideCol.valueChanges();
    console.log(this.slides,this.slideCol,test);

    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed:1000,
      interval: 10000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }


}
