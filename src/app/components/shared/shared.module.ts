import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FlexLayoutModule } from '@angular/flex-layout';

import { BannerPromotionComponent } from './banner-promotion/banner-promotion.component';
import { BannersComponent } from './banners/banners.component';
import { BannersFourComponent } from './banners-four/banners-four.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { CartService } from './services/cart.service';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderFourComponent } from './header-four/header-four.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductService } from './services/product.service';
import { ShoppingWidgetsComponent } from './shopping-widgets/shopping-widgets.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        SidebarComponent,
        OrderByPipe,
        BannersComponent,
        HeaderTwoComponent,
        ShoppingWidgetsComponent,
        HeaderThreeComponent,
        BannersFourComponent,
        BlogSectionComponent,
        BannerPromotionComponent,
        HeaderFourComponent,
        CategoriesMenuComponent,
        CategoriesSectionComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatListModule,
        MatSliderModule,
        MatExpansionModule,
        MatMenuModule,
        MatTableModule,
        MatRadioModule,
        MatDialogModule,
        MatChipsModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatSelectModule,
        MatTabsModule,
        MatDividerModule,
        MatCardModule,
        FlexLayoutModule,
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatListModule,
        MatExpansionModule,
        MatMenuModule,
        MatTableModule,
        MatSliderModule,
        MatRadioModule,
        MatDialogModule,
        MatChipsModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatSelectModule,
        MatTabsModule,
        MatDividerModule,
        MatCardModule,
        OrderByPipe,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        SidebarComponent,
        BannersComponent,
        FlexLayoutModule,
        HeaderTwoComponent,
        HeaderThreeComponent,
        HeaderFourComponent,
        ShoppingWidgetsComponent,
        BannersFourComponent,
        BlogSectionComponent,
        BannerPromotionComponent,
        CategoriesMenuComponent,
        CategoriesSectionComponent,
    ],
    providers: [
        ProductService,
        CartService
    ]
})
export class SharedModule { }
