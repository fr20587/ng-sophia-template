// Angular Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

// Third's Modules
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule} from 'ngx-pagination';
import { NgxImageZoomModule } from 'ngx-image-zoom';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

// Components
import { BrandsComponent } from './widgets/brands/brands.component';
import { CategoriesComponent } from './widgets/categories/categories.component';
import { HomeComponent } from './home/home.component';
import { HomeFiveComponent } from './home-five/home-five.component';
import { HomeFourComponent } from './home-four/home-four.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { PopularProductsComponent } from './widgets/popular-products/popular-products.component';
import { PriceComponent } from './products/price/price.component';
import { ProductCarouselComponent } from './../shop/home/product-carousel/product-carousel.component';
import { ProductCarouselThreeComponent } from './home-three/product-carousel-three/product-carousel-three.component';
import { ProductCarouselTwoComponent } from './home-two/product-carousel-two/product-carousel-two.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';
import { ProductsComponent } from './products/products.component';
import { ProductVerticalComponent } from './products/product-vertical/product-vertical.component';
import { ProductZoomComponent } from './products/product-details/product-zoom/product-zoom.component';



@NgModule({
  declarations: [
    BrandsComponent,
    CategoriesComponent,
    HomeComponent,
    HomeFiveComponent,
    HomeFourComponent,
    HomeThreeComponent,
    HomeTwoComponent,
    MainCarouselComponent,
    PopularProductsComponent,
    PriceComponent,
    ProductCarouselComponent,
    ProductCarouselThreeComponent,
    ProductCarouselTwoComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDialogComponent,
    ProductLeftSidebarComponent,
    ProductsComponent,
    ProductVerticalComponent,
    ProductZoomComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    // Modules
    SharedModule,
    ShopRoutingModule,

    // Third's Modules
    SwiperModule,
    NgxImageZoomModule, // <-- Add this line
    NgxPaginationModule,

  ],
  exports: [
    ProductDialogComponent,
    ProductZoomComponent
  ],
  entryComponents:[
    ProductDialogComponent,
    ProductZoomComponent
  ],
})

export class ShopModule { }
