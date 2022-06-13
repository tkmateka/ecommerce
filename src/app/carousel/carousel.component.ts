import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images = [
    { path: '../../assets/images/cliff.jpeg' },
    { path: '../../assets/images/felucca.jpeg' },
    { path: '../../assets/images/ocean.jpeg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
