import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../../products/product-dialog/product-dialog.component';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { WishlistService } from 'src/app/components/shared/services/wishlist.service';

import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';
SwiperCore.use([Autoplay, Navigation]);

@Component({
    selector: 'app-product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrls: ['./product-carousel.component.sass']
})
export class ProductCarouselComponent implements OnInit {
    @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
    @Input('product') product: Array<Product> = [];

    public config: SwiperOptions = {};

    public autoplay: any = {
        delay: 2500,
        disableOnInteraction: false
    };

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private cartService: CartService,
        private productService: ProductService,
        private wishlistService: WishlistService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 5,
            spaceBetween: 16,
            keyboard: true,
            preloadImages: false,
            breakpoints: {
                480: {
                    slidesPerView: 1
                },
                740: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }
        }
    }


    public openProductDialog(product) {
        const dialogRef = this.dialog.open(ProductDialogComponent, {
            data: product,
            panelClass: 'product-dialog',
        });
        dialogRef.afterClosed().subscribe(product => {
            if (product) {
                this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }

    // Add to cart
    public addToCart(product: Product, quantity = 1) {
        this.cartService.addToCart(product, quantity);
        console.log(product, quantity);
    }

    // Add to wishlist
    public addToWishlist(product: Product) {
        this.wishlistService.addToWishlist(product);
    }

    // Add to compare
    public addToCompare(product: Product) {
        this.productService.addToCompare(product);
    }
}
