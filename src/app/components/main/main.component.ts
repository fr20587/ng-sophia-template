import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from "../../modals/product.model";
import { CartItem } from "../../modals/cart-item";
import { ProductService } from "../shared/services/product.service";
import { CartService } from "../shared/services/cart.service";
import { Router, NavigationEnd } from '@angular/router';
import { SidebarMenuService } from '../shared/sidebar/sidebar-menu.service';
import { SidenavMenu } from '../shared/sidebar/sidebar-menu.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

    public sidenavMenuItems: Array<any>;

    public currencies = ['CUP', 'MLC'];
    public currency: any;
    public flags = [
        { name: 'Español', image: 'assets/images/flags/es.png' },
        { name: 'Inglés', image: 'assets/images/flags/gb.svg' },
    ]
    public flag: any;

    products: Product[];

    indexProduct: number;
    shoppingCartItems: CartItem[] = [];

    public banners = [];

    wishlistItems: Product[] = [];

    public url: any;

    navItems: SidenavMenu[] = [
        {
            displayName: 'Inicio',
            iconName: 'recent_actors',
            route: '/home'
        },
        {
            displayName: 'Productos',
            iconName: 'feedback',
            route: '/home/products/all'
        },
        {
            displayName: 'Novedades',
            iconName: 'report_problem',
            route: '/blog/blog-list'
        },
        {
            displayName: 'Contáctenos',
            iconName: 'feedback',
            route: '/pages/contact'
        }
    ];

    constructor(public router: Router, private cartService: CartService, public sidenavMenuService: SidebarMenuService) {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        })
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.currency = this.currencies[0];
        this.flag = this.flags[0];
    }

    public changeCurrency(currency) {
        this.currency = currency;
    }
    public changeLang(flag) {
        this.flag = flag;
    }
}
