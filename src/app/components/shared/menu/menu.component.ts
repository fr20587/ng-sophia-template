import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

    public url: any;

    constructor(
        public router: Router,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        })
    }

    ngOnInit() {
    }

    openMegaMenu() {
        const pane = document.getElementsByClassName('cdk-overlay-pane');
        [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
                if (el.children[0].classList.contains('mega-menu')) {
                    el.classList.add('mega-menu-pane');
                }
            }
        });
    }
}
