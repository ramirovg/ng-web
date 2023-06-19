import {Component, OnInit} from '@angular/core';
import {Carousel, initTE} from "tw-elements";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  ngOnInit() {
    Carousel.interval = 1000;
    initTE({ Carousel });
  }
}
