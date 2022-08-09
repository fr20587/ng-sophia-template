import { Component, OnInit, Input } from '@angular/core';

import SwiperCore, { Autoplay, Navigation, Pagination, SwiperOptions, } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
    selector: 'app-main-carousel',
    templateUrl: './main-carousel.component.html',
    styleUrls: ['./main-carousel.component.sass']
})
export class MainCarouselComponent implements OnInit {

    @Input('slides') slides: Array<any> = [];

    public config: SwiperOptions = {};
    public autoplay: any = {
        delay: 2500,
        disableOnInteraction: false
    };
    public pagination: any = {
        clickable: true,
        dynamicBullets: true
    };

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            grabCursor: true,
            preloadImages: false,
            speed: 500,
            effect: "slide"
        }
    }




}
