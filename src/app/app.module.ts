import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductComponent } from './components/products-pages/product/product.component';
import { ProductsComponent } from './components/products-pages/products/products.component';
import { NewProductComponent } from './components/products-pages/new-product/new-product.component';
import { PurchaseComponent } from './components/purchases-pages/purchase/purchase.component';
import { PurchasesComponent } from './components/purchases-pages/purchases/purchases.component';
import { NewPurchaseComponent } from './components/purchases-pages/new-purchase/new-purchase.component';
import { CartComponent } from './components/cart/cart.component';
import { ModalComponent } from './components/utils/modal/modal/modal.component';
import { LabelSelectComponent } from './components/utils/modal/label-select/label-select.component';
import { LabelInputComponent } from './components/utils/modal/label-input/label-input.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/general-pages/navbar/navbar.component';
import { FooterComponent } from './components/general-pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductsComponent,
    NewProductComponent,
    PurchaseComponent,
    PurchasesComponent,
    NewPurchaseComponent,
    CartComponent,
    ModalComponent,
    LabelSelectComponent,
    LabelInputComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
