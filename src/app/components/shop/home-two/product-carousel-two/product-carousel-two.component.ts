import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { WishlistService } from 'src/app/components/shared/services/wishlist.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../../products/product-dialog/product-dialog.component';


import SwiperCore, { Autoplay, Navigation, Pagination, SwiperOptions, } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
    selector: 'app-product-carousel-two',
    templateUrl: './product-carousel-two.component.html',
    styleUrls: ['./product-carousel-two.component.sass']
})
export class ProductCarouselTwoComponent implements OnInit {
    @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
    @Input('product') product: Array<Product> = [];

    public config: SwiperOptions = {};
    public autoplay: any = {
        delay: 500,
        disableOnInteraction: false
    };
    public pagination: any = {
        clickable: true,
        dynamicBullets: true
    };

    constructor(
        private cartService: CartService,
        private productsService: ProductService,
        private wishlistService: WishlistService,
        private dialog: MatDialog,
        private router: Router
    ) { }


    ngOnInit() {
        console.log(this.product);
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
        this.productsService.addToCompare(product);
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
}
